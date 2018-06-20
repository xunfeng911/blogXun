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
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

    private _total: number;
    private _pageIndex                               = 0;
            firstIndex                               = 1;
            pages                                    = [];
    @Input  () inTable                               = false;
    @Input  () pageSize                              = 10;
    @Input  () hideOnSinglePage                      = false;               // 单页不展现分页
    @Output () pageIndexChange: EventEmitter<number> = new EventEmitter();  // 页数改变回调
    // 自定义页码结构
    @ViewChild('renderItemTemplate') private _itemRender: TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }>;
    @Input()
    set itemRender(value: TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }>) {
        this._itemRender = value;
    }
    get itemRender(): TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }> {
        return this._itemRender;
    }

    @Input() showTotal: TemplateRef<{ $implicit: number, range: [number, number] }>;  // 总数展现
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
        this.buildIndexes();
    }
    get pageIndex(): number {
        return this._pageIndex;
    }

    jumpPage(i: number): void {
        if (i === this.pageIndex) return;
        if (i < this.firstIndex) {
            this.pageIndex = this.firstIndex;
        } else if (i > this.lastIndex) {
            this.pageIndex = this.lastIndex;
        } else {
            this.pageIndex = i;
        }
        this.pageIndexChange.emit(this.pageIndex);
    }

    jumpPreFive(): void {
        this.jumpPage(this.pageIndex - 5);
    }
    jumpNextFive(): void {
        this.jumpPage(this.pageIndex + 5);
    }
    jumpPre(): void {
        if (this.isFirstIndex) return;
        this.jumpPage(this.pageIndex - 1);
    }
    jumpNext(): void {
        if (this.isLastIndex) return;
        this.jumpPage(this.pageIndex + 1);
    }
    buildIndexes(): void {
        const _pages = [];
        if (this.lastIndex <= 9) {
            for (let i = 2; i < this.lastIndex; i++) {
                _pages.push({index: i});
            }
        } else {
            const current = +this.pageIndex;
            let left = Math.max(2, current - 2);
            let right = Math.min(current + 2, this.lastIndex - 1);
            if (current - 1 <= 2) {
                right = 5;
            }
            if (this.lastIndex - current <= 2) {
                left = this.lastIndex - 4;
            }
            for (let i = left; i <= right; i++) {
                _pages.push({index: i});
            }
        }
        this.pages = _pages;
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
