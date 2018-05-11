import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cs-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.scss']
})
export class MyProductComponent implements OnInit {
  @Input() proData;
  windowWidth: number;
  constructor() {
    this.windowWidth = window.screen.width;
  }
  ngOnInit() {
  }

}
