import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '../components/grid/grid.module';
import { TimelineModule } from '../components/time-line/time-line.module';
import { PaginationModule } from '../components/pagination/pagination.module';
@NgModule({
    imports: [
        CommonModule,
        GridModule,
        TimelineModule,
        PaginationModule
    ],
    declarations: [
    ],
    exports: [
        GridModule,
        TimelineModule,
        PaginationModule
    ]
})
export class SharedModule { }
