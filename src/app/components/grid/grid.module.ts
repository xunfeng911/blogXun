import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ColComponent } from './col.component';
import { ColDirective } from './col.directive';
import { RowComponent } from './row.component';

@NgModule({
  declarations: [ RowComponent, ColDirective, ColComponent ],
  exports     : [ RowComponent, ColDirective, ColComponent ],
  imports     : [ CommonModule ]
})
export class GridModule {
}
