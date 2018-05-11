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
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  BlogList: Array<BlogItem>;
  windowWidth: number;
  constructor(private getBlog: GetBlogInfoService) {
    this.BlogList = [];
    this.windowWidth = window.screen.width;
  }

  ngOnInit() {
    this._getPage();
  }
  private _getPage(_page: number = 1) {
    this.getBlog.getBlogList(_page).subscribe(data => this.BlogList = data);
  }
}
