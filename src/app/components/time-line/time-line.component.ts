import { TimeLineItemComponent } from './time-line-item.component';
import {
    Component,
    ContentChildren,
    QueryList,
    AfterContentInit,
    OnDestroy,
    AfterContentChecked
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'cs-time-line',
    template: `
    <ul class="timeline">
        <ng-content></ng-content>
    </ul>
    `,
    styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements AfterContentInit, OnDestroy, AfterContentChecked {
    private timeLineSubscription: Subscription;
    @ContentChildren(TimeLineItemComponent) _timeLineLists: QueryList<TimeLineItemComponent>;
    constructor() { }
    updateChildrenTimeLine(): void {
        setTimeout(() => {
            if (this._timeLineLists && this._timeLineLists.length) {
                this._timeLineLists.toArray().forEach((item, index) => item._lastItem = (index === this._timeLineLists.length - 1));
            }
        }, 300);
    }
    ngAfterContentInit(): void {
        this.updateChildrenTimeLine();
    }
    ngAfterContentChecked(): void {
        if (this._timeLineLists) {
            this.timeLineSubscription = this._timeLineLists.changes.subscribe(() => {
                this.updateChildrenTimeLine();
            });
        }
    }
    ngOnDestroy(): void {
        if (this.timeLineSubscription) {
          this.timeLineSubscription.unsubscribe();
          this.timeLineSubscription = null;
        }
      }
}
