import { Component, OnInit } from '@angular/core';
import { GetBlogInfoService } from '../../services/get-blog-info.service';

export interface BlogItem {
    blog_id: number;
    blog_title: string;
    blog_date: Date;
    blog_views: number;
    blog_intro: string;
}
@Component({
    selector: 'cs-blog',
    template: `
        <div class="blog" cs-row>
        <cs-time-line [csSpan]="windowWidth >= 960 ? 20 : 24" [csOffset]="windowWidth >= 960 ? 2 : 0" cs-col>
            <cs-time-line-item *ngFor="let itm of blogSet.list; index as i" [xDate]="itm.blogDate">
                <cs-blog-item [data]="item"></cs-blog-item>
            </cs-time-line-item>
            </cs-time-line>
        </div>
    `,
    styles: [`
    .blog {
        padding-top: 24px;
        padding-left: 160px;
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
    };
    windowWidth: number;
    constructor(private getBlog: GetBlogInfoService) {
        this.blogSet = {
            list: []
        };
        this.windowWidth = window.screen.width;
    }

    ngOnInit() {
        this._getPage();
    }
    private _getPage(_page: number = 1) {
        this.getBlog.getBlogList(_page).subscribe(res => {
            this.blogSet.list = res.result.data;
        });
    }
}
