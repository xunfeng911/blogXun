import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    TemplateRef,
    ViewChild
} from '@angular/core';

import { Subscription } from 'rxjs';

@Component({
    selector: 'cs-pagination',
    preserveWhitespaces: false,
    templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit, OnDestroy {
    private i18n$: Subscription;
    locale: {} = {};
    @ViewChild('renderItemTemplate') private _itemRender: TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }>;
    private _showSizeChanger = false;
    private _showQuickJumper = false;
    private _simple = false;
    private _hideOnSinglePage = false;
    private _pageSize = 10;
    private _pageSizeOptions = [10, 20, 30, 40];
    private _total: number;
    private _pageIndex = 1;
    firstIndex = 1;
    pages = [];
    @Input() nzShowTotal: TemplateRef<{ $implicit: number, range: [number, number] }>;
    @Input() nzInTable = false;
    @Input() nzSize: string;
    @Output() nzPageSizeChange: EventEmitter<number> = new EventEmitter();
    @Output() nzPageIndexChange: EventEmitter<number> = new EventEmitter();

    constructor() { }

    ngOnInit(): void { }

    ngOnDestroy(): void {
    }
}
