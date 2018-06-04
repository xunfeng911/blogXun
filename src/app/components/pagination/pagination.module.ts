import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination.component';


@NgModule({
  declarations: [ PaginationComponent ],
  exports     : [  ],
  imports     : [ CommonModule ]
})

export class PaginationModule { }
