import { Component, OnInit, Input } from '@angular/core';
import { BlogItem } from './blog.component';

@Component({
    selector: 'cs-blog-item',
    template: `
        <div class="blog-item">blog-item</div>
    `,
    styles: [``]
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
