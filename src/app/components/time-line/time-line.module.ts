import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeLineComponent } from './time-line.component';
import { TimeLineItemComponent } from './time-line-item.component';
import { VisualInDirective } from '../../shared/Directive/visual-in.directive';

@NgModule({
  declarations: [TimeLineComponent, TimeLineItemComponent, VisualInDirective],
  exports     : [TimeLineComponent, TimeLineItemComponent, VisualInDirective ],
  imports     : [ CommonModule ]
})

export class TimelineModule {
}
