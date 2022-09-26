import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Injector,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { DataService } from '../../../data/providers/data.service';
import { BulkActionRegistryService } from '../../../providers/bulk-action-registry/bulk-action-registry.service';
import { BulkAction, BulkActionLocationId } from '../../../providers/bulk-action-registry/bulk-action-types';

@Component({
    selector: 'vdr-bulk-action-menu',
    templateUrl: './bulk-action-menu.component.html',
    styleUrls: ['./bulk-action-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulkActionMenuComponent<T = any> implements OnInit, OnChanges, OnDestroy {
    @Input() locationId: BulkActionLocationId;
    @Input() selection: T[];
    @Input() hostComponent: any;
    @Output() clearSelection = new EventEmitter<void>();
    actions$: Observable<Array<BulkAction<T> & { display: boolean }>>;
    userPermissions: string[] = [];
    selection$ = new BehaviorSubject<T[]>([]);

    private subscription: Subscription;

    constructor(
        private bulkActionRegistryService: BulkActionRegistryService,
        private injector: Injector,
        private route: ActivatedRoute,
        private dataService: DataService,
    ) {}

    ngOnChanges(changes: SimpleChanges) {
        if ('selection' in changes) {
            this.selection$.next(this.selection);
        }
    }

    ngOnInit(): void {
        const actionsForLocation = this.bulkActionRegistryService.getBulkActionsForLocation(this.locationId);
        this.actions$ = this.selection$.pipe(
            switchMap(selection => {
                return Promise.all(
                    actionsForLocation.map(async action => {
                        let display = true;
                        const isVisibleFn = action.isVisible;
                        if (typeof isVisibleFn === 'function') {
                            display = await isVisibleFn({
                                injector: this.injector,
                                hostComponent: this.hostComponent,
                                route: this.route,
                                selection,
                            });
                        }
                        return { ...action, display };
                    }),
                );
            }),
        );
        this.subscription = this.dataService.client
            .userStatus()
            .mapStream(({ userStatus }) => {
                this.userPermissions = userStatus.permissions;
            })
            .subscribe();
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }

    hasPermissions(bulkAction: Pick<BulkAction, 'requiresPermission'>) {
        if (!this.userPermissions) {
            return false;
        }
        if (!bulkAction.requiresPermission) {
            return true;
        }
        if (typeof bulkAction.requiresPermission === 'string') {
            return this.userPermissions.includes(bulkAction.requiresPermission);
        }
        if (typeof bulkAction.requiresPermission === 'function') {
            return bulkAction.requiresPermission(this.userPermissions);
        }
    }

    actionClick(event: MouseEvent, action: BulkAction) {
        action.onClick({
            injector: this.injector,
            event,
            route: this.route,
            selection: this.selection,
            hostComponent: this.hostComponent,
            clearSelection: () => this.clearSelection.next(),
        });
    }
}
