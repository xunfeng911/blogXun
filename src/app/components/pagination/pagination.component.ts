import {
    Component,
    EventEmitter,
    Input,
    Output,
    TemplateRef,
    ViewChild
} from '@angular/core';
@Component({
    selector: 'cs-pagination',
    preserveWhitespaces: false,
    templateUrl: './pagination.component.html'
})
export class PaginationComponent {

    private _total: number;
    private _pageIndex                               = 1;
            firstIndex                               = 1;
            pages                                    = [];
    @Input  () inTable                               = false;
    @Input  () pageSize                              = 10;
    @Input  () hideOnSinglePage                      = false;               // 单页不展现分页
    @Input  () simple                                = false;               // 简单模式
    @Output () pageIndexChange: EventEmitter<number> = new EventEmitter();  // 页数改变回调
    @Input  () showTotal      : TemplateRef<{ $implicit: number, range: [number, number] }>;  // 总数展现
    @Input()
    set total(value: number) {
        this._total = value;
    }
    get total(): number {
        return this._total;
    }
    @Input()
    set pageIndex(value: number) {
        if (this._pageIndex === value) {
        return;
        }
        if (value > this.lastIndex) {
        this._pageIndex = this.lastIndex;
        } else if (value < this.firstIndex) {
        this._pageIndex = this.firstIndex;
        } else {
        this._pageIndex = Number(value);
        }
        // this.buildIndexes();
    }
    get pageIndex(): number {
        return this._pageIndex;
    }
    // 自定义页码结构
    @ViewChild('renderItemTemplate') private _itemRender: TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }>;
    @Input()
    set itemRender(value: TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }>) {
        this._itemRender = value;
    }
    get itemRender(): TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }> {
        return this._itemRender;
    }

    get lastIndex(): number {
        return Math.ceil(this.total / this.pageSize);
    }
    get isLastIndex(): boolean {
        return this.pageIndex === this.lastIndex;
    }
    get isFirstIndex(): boolean {
        return this.pageIndex === this.firstIndex;
    }
}
