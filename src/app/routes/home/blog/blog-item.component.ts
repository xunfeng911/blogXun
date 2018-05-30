import { Component, OnInit, Input } from '@angular/core';
import { BlogItem } from './blog.component';

@Component({
    selector: 'cs-blog-item',
    template: `
        <div class="blog-item">
            <div class="blog-item-tit">
                {{ data.blogTitle }}
            </div>
            <div class="blog-item-sub">
                <span>阅读：{{ data.blogViews }}</span>
                <span>点赞：0</span>
            </div>
            <div class="blog-item-cont">
                {{ data.blogIntro }}
            </div>
        </div>
    `,
    styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
    @Input() data: BlogItem;
    windowWidth: number;
    constructor() {
        this.windowWidth = window.screen.width;
    }
    ngOnInit() {
        console.log(this.data);
    }
}
