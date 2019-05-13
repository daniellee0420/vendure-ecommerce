import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { delay, filter, map, switchMap, take, takeUntil, withLatestFrom } from 'rxjs/operators';

import { BaseListComponent } from '../../../common/base-list.component';
import { SearchInput, SearchProducts } from '../../../common/generated-types';
import { _ } from '../../../core/providers/i18n/mark-for-extraction';
import { NotificationService } from '../../../core/providers/notification/notification.service';
import { DataService } from '../../../data/providers/data.service';
import { ModalService } from '../../../shared/providers/modal/modal.service';
import { ProductSearchInputComponent } from '../product-search-input/product-search-input.component';

@Component({
    selector: 'vdr-products-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent
    extends BaseListComponent<SearchProducts.Query, SearchProducts.Items, SearchProducts.Variables>
    implements OnInit {
    searchTerm = '';
    facetValueIds: string[] = [];
    groupByProduct = true;
    facetValues$: Observable<SearchProducts.FacetValues[]>;
    @ViewChild('productSearchInputComponent') private productSearchInput: ProductSearchInputComponent;
    constructor(
        private dataService: DataService,
        private modalService: ModalService,
        private notificationService: NotificationService,
        router: Router,
        route: ActivatedRoute,
    ) {
        super(router, route);
        super.setQueryFn(
            (...args: any[]) => this.dataService.product.searchProducts(this.searchTerm, ...args),
            data => data.search,
            // tslint:disable-next-line:no-shadowed-variable
            (skip, take) => ({
                input: {
                    skip,
                    take,
                    term: this.searchTerm,
                    facetIds: this.facetValueIds,
                    groupByProduct: this.groupByProduct,
                } as SearchInput,
            }),
        );
    }

    ngOnInit() {
        super.ngOnInit();
        this.facetValues$ = this.listQuery.mapStream(data => data.search.facetValues);
        this.route.queryParamMap
            .pipe(
                map(qpm => qpm.get('q')),
                takeUntil(this.destroy$),
            )
            .subscribe(term => {
                this.productSearchInput.setSearchTerm(term);
            });

        const fvids$ = this.route.queryParamMap.pipe(map(qpm => qpm.getAll('fvids')));

        fvids$.pipe(takeUntil(this.destroy$)).subscribe(ids => {
            this.productSearchInput.setFacetValues(ids);
        });

        this.facetValues$
            .pipe(
                take(1),
                delay(100),
                withLatestFrom(fvids$),
            )
            .subscribe(([__, ids]) => {
                this.productSearchInput.setFacetValues(ids);
            });
    }

    setSearchTerm(term: string) {
        this.searchTerm = term;
        this.setQueryParam('q', term || null);
        this.refresh();
    }

    setFacetValueIds(ids: string[]) {
        this.facetValueIds = ids;
        this.setQueryParam('fvids', ids);
        this.refresh();
    }

    rebuildSearchIndex() {
        this.dataService.product.reindex().subscribe(({ reindex }) => {
            if (reindex.success) {
                const time = new Intl.NumberFormat().format(reindex.timeTaken);
                this.notificationService.success(_('catalog.reindex-successful'), {
                    count: reindex.indexedItemCount,
                    time,
                });
                this.refresh();
            } else {
                this.notificationService.error(_('catalog.reindex-error'));
            }
        });
    }

    deleteProduct(productId: string) {
        this.modalService
            .dialog({
                title: _('catalog.confirm-delete-product'),
                buttons: [
                    { type: 'seconday', label: _('common.cancel') },
                    { type: 'danger', label: _('common.delete'), returnValue: true },
                ],
            })
            .pipe(
                switchMap(response => (response ? this.dataService.product.deleteProduct(productId) : EMPTY)),
            )
            .subscribe(
                () => {
                    this.notificationService.success(_('common.notify-delete-success'), {
                        entity: 'Product',
                    });
                    this.refresh();
                },
                err => {
                    this.notificationService.error(_('common.notify-delete-error'), {
                        entity: 'Product',
                    });
                },
            );
    }
}
