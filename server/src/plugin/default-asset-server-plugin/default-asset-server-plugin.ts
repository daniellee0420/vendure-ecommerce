import express from 'express';
import { NextFunction, Request, Response } from 'express';
import proxy from 'http-proxy-middleware';
import path from 'path';

import { AssetStorageStrategy } from '../../config/asset-storage-strategy/asset-storage-strategy';
import { VendureConfig } from '../../config/vendure-config';
import { InjectorFn, VendurePlugin } from '../../config/vendure-plugin/vendure-plugin';

import { DefaultAssetPreviewStrategy } from './default-asset-preview-strategy';
import { DefaultAssetStorageStrategy } from './default-asset-storage-strategy';
import { transformImage } from './transform-image';

export type ImageTransformMode = 'crop' | 'resize';

export interface ImageTransformPreset {
    name: string;
    width: number;
    height: number;
    mode: ImageTransformMode;
}

export interface DefaultAssetServerOptions {
    hostname?: string;
    port: number;
    route: string;
    assetUploadDir: string;
    previewMaxWidth?: number;
    previewMaxHeight?: number;
    presets?: ImageTransformPreset[];
}

/**
 * The DefaultAssetServerPlugin instantiates a static Express server which is used to
 * serve the assets. It can also perform on-the-fly image transformations and caches the
 * results for subsequent calls.
 */
export class DefaultAssetServerPlugin implements VendurePlugin {
    private assetStorage: AssetStorageStrategy;
    private readonly cacheDir = 'cache';
    private readonly presets: ImageTransformPreset[] = [
        { name: 'tiny', width: 50, height: 50, mode: 'crop' },
        { name: 'thumb', width: 150, height: 150, mode: 'crop' },
        { name: 'small', width: 300, height: 300, mode: 'resize' },
        { name: 'medium', width: 500, height: 500, mode: 'resize' },
        { name: 'large', width: 800, height: 800, mode: 'resize' },
    ];

    constructor(private options: DefaultAssetServerOptions) {
        if (options.presets) {
            for (const preset of options.presets) {
                const existingIndex = this.presets.findIndex(p => p.name === preset.name);
                if (-1 < existingIndex) {
                    this.presets.splice(existingIndex, 1, preset);
                } else {
                    this.presets.push(preset);
                }
            }
        }
    }

    configure(config: Required<VendureConfig>) {
        this.assetStorage = new DefaultAssetStorageStrategy(this.options.assetUploadDir, this.options.route);
        config.assetOptions.assetPreviewStrategy = new DefaultAssetPreviewStrategy({
            maxWidth: this.options.previewMaxWidth || 1600,
            maxHeight: this.options.previewMaxHeight || 1600,
        });
        config.assetOptions.assetStorageStrategy = this.assetStorage;
        config.middleware.push({
            handler: this.createProxyHandler(config.hostname, !config.silent),
            route: this.options.route,
        });
        return config;
    }

    onBootstrap(inject: InjectorFn): void | Promise<void> {
        this.createAssetServer();
    }

    /**
     * Creates the image server instance
     */
    private createAssetServer() {
        const assetServer = express();
        assetServer.use(this.serveStaticFile(), this.generateTransformedImage());
        assetServer.listen(this.options.port);
    }

    /**
     * Sends the file requested to the broswer.
     */
    private serveStaticFile() {
        return (req: Request, res: Response) => {
            const filePath = path.join(this.options.assetUploadDir, this.getFileNameFromRequest(req));
            res.sendFile(filePath);
        };
    }

    /**
     * If an exception was thrown by the first handler, then it may be because a transformed image
     * is being requested which does not yet exist. In this case, this handler will generate the
     * transformed image, save it to cache, and serve the result as a response.
     */
    private generateTransformedImage() {
        return async (err, req: Request, res: Response, next: NextFunction) => {
            if (err && err.status === 404) {
                if (req.query) {
                    let file: Buffer;
                    try {
                        file = await this.assetStorage.readFileToBuffer(req.path);
                    } catch (err) {
                        res.status(404).send('Resource not found');
                        return;
                    }
                    const image = await transformImage(file, req.query, this.presets || []);
                    const imageBuffer = await image.toBuffer();
                    const cachedFileName = this.getFileNameFromRequest(req);
                    await this.assetStorage.writeFileFromBuffer(cachedFileName, imageBuffer);
                    res.set('Content-Type', `image/${(await image.metadata()).format}`);
                    res.send(imageBuffer);
                }
            }
            next();
        };
    }

    private getFileNameFromRequest(req: Request): string {
        if (req.query.w || req.query.h) {
            const width = req.query.w || '';
            const height = req.query.h || '';
            const mode = req.query.mode || '';
            return this.cacheDir + '/' + this.addSuffix(req.path, `_transform_w${width}_h${height}_m${mode}`);
        } else if (req.query.preset) {
            if (this.presets && !!this.presets.find(p => p.name === req.query.preset)) {
                return this.cacheDir + '/' + this.addSuffix(req.path, `_transform_pre_${req.query.preset}`);
            }
        }
        return req.path;
    }

    /**
     * Configures the proxy middleware which will be passed to the main Vendure server. This
     * will proxy all asset requests to the dedicated asset server.
     */
    private createProxyHandler(serverHostname: string, logging: boolean) {
        const route = this.options.route.charAt(0) === '/' ? this.options.route : '/' + this.options.route;
        const proxyHostname = this.options.hostname ? this.options.hostname : serverHostname || 'localhost';
        return proxy({
            // TODO: how do we detect https?
            target: `http://${proxyHostname}:${this.options.port}`,
            pathRewrite: {
                [`^${route}`]: '/',
            },
            logLevel: logging ? 'info' : 'silent',
        });
    }

    private addSuffix(fileName: string, suffix: string): string {
        const ext = path.extname(fileName);
        const baseName = path.basename(fileName, ext);
        return `${baseName}${suffix}${ext}`;
    }
}
