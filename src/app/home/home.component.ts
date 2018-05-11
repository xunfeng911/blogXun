import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { timer } from 'rxjs';
@Component({
  selector: 'cs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  _date: any;
  constructor() {}

  ngOnInit() {
    const _timer = timer(0, 1000);
    _timer.subscribe(t => this._date = moment().format('YYYY-MM-DD hh:mm:ss'));
  }
}
