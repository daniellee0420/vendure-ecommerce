import { Injectable } from '@nestjs/common';
import { OrderType } from '@vendure/common/lib/generated-types';
import { pick } from '@vendure/common/lib/pick';

import { RequestContext } from '../../../api/index';
import { ConfigService } from '../../../config/index';
import { TransactionalConnection } from '../../../connection/index';
import { Channel, Order, OrderItem, OrderLine, ShippingLine, Surcharge } from '../../../entity/index';
import { ChannelService } from '../../services/channel.service';
import { OrderService } from '../../services/order.service';

@Injectable()
export class OrderSplitter {
    constructor(
        private connection: TransactionalConnection,
        private configService: ConfigService,
        private channelService: ChannelService,
        private orderService: OrderService,
    ) {}

    async createSellerOrders(ctx: RequestContext, order: Order): Promise<Order[]> {
        const { orderSellerStrategy } = this.configService.orderOptions;
        const partialOrders = await orderSellerStrategy.splitOrder?.(ctx, order);
        if (!partialOrders || partialOrders.length === 0) {
            // No split is needed
            return [];
        }
        const defaultChannel = await this.channelService.getDefaultChannel(ctx);

        order.type = OrderType.Aggregate;
        order.sellerOrders = [];
        for (const partialOrder of partialOrders) {
            const lines: OrderLine[] = [];
            for (const line of partialOrder.lines) {
                lines.push(await this.duplicateOrderLine(ctx, line));
            }
            const shippingLines: ShippingLine[] = [];
            for (const shippingLine of partialOrder.shippingLines) {
                shippingLines.push(await this.duplicateShippingLine(ctx, shippingLine));
            }
            const surcharges: Surcharge[] = [];
            for (const surcharge of partialOrder.surcharges) {
                surcharges.push(await this.duplicateSurcharge(ctx, surcharge));
            }
            const sellerOrder = await this.connection.getRepository(ctx, Order).save(
                new Order({
                    type: OrderType.Seller,
                    aggregateOrder: order,
                    code: await this.configService.orderOptions.orderCodeStrategy.generate(ctx),
                    active: false,
                    orderPlacedAt: new Date(),
                    customer: order.customer,
                    channels: [new Channel({ id: partialOrder.channelId }), defaultChannel],
                    state: partialOrder.state,
                    lines,
                    surcharges,
                    shippingLines,
                    couponCodes: order.couponCodes,
                    modifications: [],
                    shippingAddress: order.shippingAddress,
                    billingAddress: order.billingAddress,
                    subTotal: 0,
                    subTotalWithTax: 0,
                    currencyCode: order.currencyCode,
                }),
            );

            order.sellerOrders.push(sellerOrder);
            await this.orderService.applyPriceAdjustments(ctx, sellerOrder);
        }
        await orderSellerStrategy.afterSellerOrdersCreated?.(ctx, order, order.sellerOrders);
        return order.sellerOrders;
    }

    private async duplicateOrderLine(ctx: RequestContext, line: OrderLine): Promise<OrderLine> {
        const newLine = await this.connection.getRepository(ctx, OrderLine).save(
            new OrderLine({
                ...pick(line, [
                    'productVariant',
                    'taxCategory',
                    'featuredAsset',
                    'shippingLine',
                    'customFields',
                ]),
                items: [],
            }),
        );
        newLine.items = line.items.map(
            item =>
                new OrderItem({
                    ...pick(item, [
                        'initialListPrice',
                        'listPrice',
                        'listPriceIncludesTax',
                        'adjustments',
                        'taxLines',
                        'cancelled',
                    ]),
                    line: newLine,
                }),
        );
        await this.connection.getRepository(ctx, OrderItem).save(newLine.items);
        return newLine;
    }

    private async duplicateShippingLine(
        ctx: RequestContext,
        shippingLine: ShippingLine,
    ): Promise<ShippingLine> {
        return await this.connection.getRepository(ctx, ShippingLine).save(
            new ShippingLine({
                ...pick(shippingLine, [
                    'shippingMethodId',
                    'order',
                    'listPrice',
                    'listPriceIncludesTax',
                    'adjustments',
                    'taxLines',
                ]),
            }),
        );
    }

    private async duplicateSurcharge(ctx: RequestContext, surcharge: Surcharge): Promise<Surcharge> {
        return await this.connection.getRepository(ctx, Surcharge).save(
            new Surcharge({
                ...pick(surcharge, [
                    'description',
                    'listPrice',
                    'listPriceIncludesTax',
                    'sku',
                    'taxLines',
                    'order',
                    'orderModification',
                ]),
            }),
        );
    }
}
