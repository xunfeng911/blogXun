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
            <cs-time-line>
                <cs-time-line-item *ngFor="let itm of blogSet.list; index as i" [xDate]="itm.blogDate">
                    <cs-blog-item [data]="itm"></cs-blog-item>
                </cs-time-line-item>
            </cs-time-line>
        </div>
    `,
    styles: [`
    .blog {
        max-width: 800px;
        margin-top: 48px;
        padding-top: 24px;
        padding-left: 140px;
    }
    @media screen and (max-width: 960px) {
        .blog {
        padding: 42px 24px 0 24px;
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
