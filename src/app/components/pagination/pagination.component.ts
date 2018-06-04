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

@Component({
    selector: 'cs-pagination',
    preserveWhitespaces: false,
    templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit, OnDestroy {
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
    @Input() showTotal: TemplateRef<{ $implicit: number, range: [number, number] }>;
    @Input() inTable = false;
    @Input() size: string;
    @Output() pageSizeChange: EventEmitter<number> = new EventEmitter();
    @Output() pageIndexChange: EventEmitter<number> = new EventEmitter();

    constructor() { }

    ngOnInit(): void { }

    ngOnDestroy(): void {
    }
}
