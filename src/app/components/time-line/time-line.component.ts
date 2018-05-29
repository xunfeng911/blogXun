import { TimeLineItemComponent } from './time-line-item.component';
import {
    Component,
    ContentChild,
    ViewEncapsulation,
    ContentChildren,
    QueryList,
    AfterContentInit, TemplateRef,
    Input
} from '@angular/core';

@Component({
    selector: 'cs-time-line',
    template: `
    <ul class="timeline">
        <ng-content></ng-content>
    </ul>
    `,
    styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements AfterContentInit {
    // @Input() fromNow: boolean;
    @ContentChildren(TimeLineItemComponent) _timeLineLists: QueryList<TimeLineItemComponent>;
    constructor() { }
    ngAfterContentInit() {
        // setTimeout(() => {
        //   if (this._timeLineLists && this._timeLineLists.length) {
        //     const listArray = this._timeLineLists.toArray();
        //     listArray.map(itm => {
        //       itm._fromNow = this.fromNow;
        //       console.log('fu:' + itm._fromNow);
        //     });
        //   }
        // });
        // 不异步不执行...why？？
        setTimeout(_ => {
            // console.log(this._timeLineLists);
            if (this._timeLineLists && this._timeLineLists.length) {
                // const listArray = this._timeLineLists.toArray();
                // listArray[listArray.length - 1]._lastItem = true;
                this._timeLineLists.last._lastItem = true;
                // console.log('ending');
            }
        });
    }
}
