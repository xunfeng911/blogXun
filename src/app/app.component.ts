import { Component, OnInit } from '@angular/core';
import { myBrowser } from '../assets/js/unti';

@Component({
  selector: 'cs-root',
  // templateUrl: './app.component.html',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  _date: any;
  sideBorder: object;
  constructor() {
    this.sideBorder = {};
  }

  ngOnInit() {
    const theBrower = myBrowser();
    switch (theBrower) {
      case 'Firefox':
        this.sideBorder = {
          'border-image': 'url(\'../assets/img/bull1.svg\') 0 120 round'
        };
        break;
      case 'Chrome':
        this.sideBorder = {
          'border-image': 'url(\'../assets/img/bull.svg\') 0 120 round'
        };
        break;
      case 'Safari':
        break;
      default:
        break;
    }
  }

}
