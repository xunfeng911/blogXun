// import * as moment from 'moment';
import {
  Component,
  Input,
  OnInit,
  ContentChild,
  ViewEncapsulation, TemplateRef
} from '@angular/core';

@Component({
  selector: 'cs-time-line-item',
  encapsulation: ViewEncapsulation.None,
  template: `
    <li
      class="timeline-itm"
      [class.timeline-itm-last]="_lastItem"
    >
      <div class="timeline-itm-line"></div>
      <div class="timeline-itm-pot"></div>
      <div class="timeline-itm-cont" csVisualIn>
        <div class="timeline-itm-date">
          {{_xDate}}
        </div>
        <ng-content></ng-content>
      </div>
    </li>
  `,
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineItemComponent implements OnInit {
  _xDate: string;
  _lastItem = false;
  // _fromNow = true;
  @Input()
  get xDate() {
    return this._xDate;
  }
  set xDate(date: any) {
    // if (this._fromNow === true) {
    //   this._xDate = moment(date).fromNow();
    // } else {
    //   this._xDate = date;
    // }
    this._xDate = date;
  }
  constructor() { }

  ngOnInit() {
    console.log('lastItem', this._lastItem);
  }

}
