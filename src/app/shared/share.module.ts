import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '../components/grid/grid.module';
import { TimelineModule } from '../components/time-line/time-line.module';
@NgModule({
    imports: [
        CommonModule,
        GridModule,
        TimelineModule
    ],
    declarations: [
    ],
    exports: [
        GridModule,
        TimelineModule
    ]
})
export class SharedModule { }
