import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'vdr-page-detail-sidebar',
    template: `
        <ng-content></ng-content>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageDetailSidebarComponent {}
