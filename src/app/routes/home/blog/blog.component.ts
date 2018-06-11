import { Component, OnInit } from '@angular/core';
import { GetBlogInfoService } from '../../../core/services/get-blog-info.service';

export interface BlogItem {
    blog_id: number;
    blog_title: string;
    blog_date: Date;
    blog_views: number;
    blog_intro: string;
}
export interface PageSet {
    pageIndex: number;
    pageSize: number;
    total: number;
}
@Component({
    selector: 'cs-blog',
    template: `
        <div class="blog">
            <div class="blog-in">
                <cs-time-line>
                    <cs-time-line-item *ngFor="let itm of blogSet.list; index as i" [xDate]="itm.blogDate">
                        <cs-blog-item [data]="itm"></cs-blog-item>
                    </cs-time-line-item>
                </cs-time-line>
            </div>
            <cs-pagination
                [itemRender]="renderItemTemplate"
                [pageSize]="10"
                [total]="100">
            </cs-pagination>
            <ng-template #renderItemTemplate let-type let-page="page">
                <a *ngIf="type==='pre'">Previous</a>
                <a *ngIf="type==='next'">Next</a>
                <a *ngIf="type==='page'">{{page}}</a>
            </ng-template>
        </div>
    `,
    styles: [`
    .blog {
        max-width: 800px !important;
        margin-top: 48px;
        padding: 3rem 5%;

    }
    .blog-in {
        padding-left: 100px;
    }
    @media screen and (max-width: 960px) {
        .blog {
            padding: 42px 24px 0 24px;
        }
        .blog-in {
            padding-left: 0;
        }
    }`]
})
export class BlogComponent implements OnInit {
    blogSet: {
        list: Array<BlogItem>;
        pageSet: PageSet;
    };
    windowWidth: number;
    constructor(private getBlog: GetBlogInfoService) {
        this.blogSet = {
            list: [],
            pageSet: {
                pageIndex: 0,
                pageSize: 0,
                total: 0
            }
        };
        this.windowWidth = window.screen.width;
    }

    ngOnInit() {
        this._getPage();
    }
    private _getPage(_page: number = 1) {
        this.getBlog.getBlogList(_page).subscribe(res => {
            this.blogSet.list = res.result.data;
            this.blogSet.pageSet = res.result.pageSet;
        });
    }
}
