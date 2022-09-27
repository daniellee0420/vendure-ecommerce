import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import {
    BulkAction,
    DataService,
    DeletionResult,
    GetFacetList,
    ModalService,
    NotificationService,
    SearchProducts,
} from '@vendure/admin-ui/core';
import { DEFAULT_CHANNEL_CODE } from '@vendure/common/lib/shared-constants';
import { unique } from '@vendure/common/lib/unique';
import { EMPTY, from, of } from 'rxjs';
import { map, mapTo, switchMap } from 'rxjs/operators';
import { getChannelCodeFromUserStatus } from '../../../../core/src/common/utilities/get-channel-code-from-user-status';

import { AssignProductsToChannelDialogComponent } from '../assign-products-to-channel-dialog/assign-products-to-channel-dialog.component';
import { BulkAddFacetValuesDialogComponent } from '../bulk-add-facet-values-dialog/bulk-add-facet-values-dialog.component';
import { FacetListComponent } from '../facet-list/facet-list.component';

import { ProductListComponent } from './product-list.component';

export const deleteProductsBulkAction: BulkAction<SearchProducts.Items, ProductListComponent> = {
    location: 'product-list',
    label: _('common.delete'),
    icon: 'trash',
    iconClass: 'is-danger',
    onClick: ({ injector, selection, hostComponent, clearSelection }) => {
        const modalService = injector.get(ModalService);
        const dataService = injector.get(DataService);
        const notificationService = injector.get(NotificationService);
        modalService
            .dialog({
                title: _('catalog.confirm-bulk-delete-products'),
                translationVars: {
                    count: selection.length,
                },
                buttons: [
                    { type: 'secondary', label: _('common.cancel') },
                    { type: 'danger', label: _('common.delete'), returnValue: true },
                ],
            })
            .pipe(
                switchMap(response =>
                    response
                        ? dataService.product.deleteProducts(unique(selection.map(p => p.productId)))
                        : EMPTY,
                ),
            )
            .subscribe(result => {
                let deleted = 0;
                const errors: string[] = [];
                for (const item of result.deleteProducts) {
                    if (item.result === DeletionResult.DELETED) {
                        deleted++;
                    } else if (item.message) {
                        errors.push(item.message);
                    }
                }
                if (0 < deleted) {
                    notificationService.success(_('common.notify-bulk-delete-success'), {
                        count: deleted,
                        entity: 'Products',
                    });
                }
                if (0 < errors.length) {
                    notificationService.error(errors.join('\n'));
                }
                hostComponent.refresh();
                clearSelection();
            });
    },
};

export const assignProductsToChannelBulkAction: BulkAction<SearchProducts.Items, ProductListComponent> = {
    location: 'product-list',
    label: _('catalog.assign-to-channel'),
    icon: 'layers',
    isVisible: ({ injector }) => {
        return injector
            .get(DataService)
            .client.userStatus()
            .mapSingle(({ userStatus }) => 1 < userStatus.channels.length)
            .toPromise();
    },
    onClick: ({ injector, selection, hostComponent, clearSelection }) => {
        const modalService = injector.get(ModalService);
        const dataService = injector.get(DataService);
        const notificationService = injector.get(NotificationService);
        modalService
            .fromComponent(AssignProductsToChannelDialogComponent, {
                size: 'lg',
                locals: {
                    productIds: unique(selection.map(p => p.productId)),
                    currentChannelIds: [],
                },
            })
            .subscribe(result => {
                if (result) {
                    clearSelection();
                }
            });
    },
};

export const removeProductsFromChannelBulkAction: BulkAction<SearchProducts.Items, ProductListComponent> = {
    location: 'product-list',
    label: _('catalog.remove-from-channel'),
    getTranslationVars: ({ injector }) => getChannelCodeFromUserStatus(injector.get(DataService)),
    icon: 'layers',
    iconClass: 'is-warning',
    isVisible: ({ injector }) => {
        return injector
            .get(DataService)
            .client.userStatus()
            .mapSingle(({ userStatus }) => {
                if (userStatus.channels.length === 1) {
                    return false;
                }
                const defaultChannelId = userStatus.channels.find(c => c.code === DEFAULT_CHANNEL_CODE)?.id;
                return userStatus.activeChannelId !== defaultChannelId;
            })
            .toPromise();
    },
    onClick: ({ injector, selection, hostComponent, clearSelection }) => {
        const modalService = injector.get(ModalService);
        const dataService = injector.get(DataService);
        const notificationService = injector.get(NotificationService);
        const activeChannelId$ = dataService.client
            .userStatus()
            .mapSingle(({ userStatus }) => userStatus.activeChannelId);

        from(getChannelCodeFromUserStatus(injector.get(DataService)))
            .pipe(
                switchMap(({ channelCode }) =>
                    modalService.dialog({
                        title: _('catalog.remove-from-channel'),
                        translationVars: {
                            channelCode,
                        },
                        buttons: [
                            { type: 'secondary', label: _('common.cancel') },
                            {
                                type: 'danger',
                                label: _('common.remove'),
                                returnValue: true,
                            },
                        ],
                    }),
                ),
                switchMap(res =>
                    res
                        ? activeChannelId$.pipe(
                              switchMap(activeChannelId =>
                                  activeChannelId
                                      ? dataService.product.removeProductsFromChannel({
                                            channelId: activeChannelId,
                                            productIds: selection.map(p => p.productId),
                                        })
                                      : EMPTY,
                              ),
                              mapTo(true),
                          )
                        : of(false),
                ),
            )
            .subscribe(removed => {
                if (removed) {
                    clearSelection();
                    notificationService.success(_('common.notify-remove-products-from-channel-success'), {
                        count: selection.length,
                    });
                    setTimeout(() => hostComponent.refresh(), 1000);
                }
            });
    },
};

export const assignFacetValuesToProductsBulkAction: BulkAction<SearchProducts.Items, ProductListComponent> = {
    location: 'product-list',
    label: _('catalog.edit-facet-values'),
    icon: 'tag',
    onClick: ({ injector, selection, hostComponent, clearSelection }) => {
        const modalService = injector.get(ModalService);
        const dataService = injector.get(DataService);
        const notificationService = injector.get(NotificationService);
        const mode: 'product' | 'variant' = hostComponent.groupByProduct ? 'product' : 'variant';
        const ids =
            mode === 'product'
                ? unique(selection.map(p => p.productId))
                : unique(selection.map(p => p.productVariantId));
        return dataService.facet
            .getAllFacets()
            .mapSingle(data => data.facets.items)
            .pipe(
                switchMap(facets =>
                    modalService.fromComponent(BulkAddFacetValuesDialogComponent, {
                        size: 'xl',
                        locals: {
                            facets,
                            mode,
                            ids,
                        },
                    }),
                ),
            )
            .subscribe(result => {
                if (result) {
                    notificationService.success(_('common.notify-bulk-update-success'), {
                        count: selection.length,
                        entity: mode === 'product' ? 'Products' : 'ProductVariants',
                    });
                    clearSelection();
                }
            });
    },
};
