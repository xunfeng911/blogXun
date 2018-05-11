import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualInDirective } from '../Directive/visual-in.directive';
import { GridModule } from '../components/grid/grid.module';
@NgModule({
  imports: [
    CommonModule,
    GridModule
  ],
  declarations: [
    VisualInDirective
  ],
  exports: [
    VisualInDirective,
    GridModule
  ]
})
export class SharedModule { }
