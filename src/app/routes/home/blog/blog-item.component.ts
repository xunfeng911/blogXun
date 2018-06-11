import { Component, Input } from '@angular/core';
import { BlogItem } from './blog.component';

@Component({
    selector: 'cs-blog-item',
    template: `
        <div class="blog-item">
            <div class="blog-item-tit">
                {{ data.blogTitle }}
            </div>
            <div class="blog-item-sub">
                <span>view：{{ data.blogViews }}</span>
            </div>
            <div class="blog-item-cont">
                {{ data.blogIntro }}
            </div>
            <div style="text-align: center;">
                <a class="blog-item-btn">查看全文</a>
            </div>
        </div>
    `,
    styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent {
    @Input() data: BlogItem;
    windowWidth: number;
    constructor() {
        this.windowWidth = window.screen.width;
    }
}
