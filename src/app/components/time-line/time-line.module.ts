import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeLineComponent } from './time-line.component';
import { TimeLineItemComponent } from './time-line-item.component';
import { SharedModule } from '../../shared/share.module';

@NgModule({
  declarations: [TimeLineComponent, TimeLineItemComponent],
  exports     : [TimeLineComponent, TimeLineItemComponent ],
  imports     : [ CommonModule, SharedModule ]
})

export class TimelineModule {
}
