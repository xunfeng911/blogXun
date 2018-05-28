import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { timer } from 'rxjs';
import { myBrowser } from '../../assets/js/unti';

@Component({
  selector: 'cs-home',
  template: `
  <div class="home">
  <cs-side class="side" [ngStyle]="sideBorder"></cs-side>
  <div class="layout">
    <router-outlet></router-outlet>
    <div style="text-align: center;">XunFeng ©{{_date}}</div>
    <div style="text-align: center;">Powered by Angular^6 && Nestjs</div>
  </div>
</div>`,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  _date: any;
  sideBorder: object;
  constructor() {}

  ngOnInit() {
    const _timer = timer(0, 1000);
    _timer.subscribe(t => this._date = moment().format('YYYY-MM-DD hh:mm:ss'));
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
