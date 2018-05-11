import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EssayComponent } from './essay.component';
import { EssayRoutes } from './essay.routing';

@NgModule({
  imports: [
    CommonModule,
    EssayRoutes
  ],
  declarations: [EssayComponent]
})
export class EssayModule { }
