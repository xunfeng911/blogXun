import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TimelineModule } from '../components/time-line/time-line.module';
import { SharedModule } from '../shared/share.module';
import { ResumeComponent } from './resume/resume.component';
import { MyProductComponent } from './resume/my-product.component';
import { MySkillComponent } from './resume/my-skill.component';
import { ResumeProCardComponent } from './resume/resume-pro-card.component';
import { HomeRoutingModule } from './home.routing';
import { BlogComponent } from './blog/blog.component';
import { SideComponent } from '../components/side/side.component';
import { BlogItemComponent } from './blog/blog-item.component';
import { MyInfoComponent } from './resume/my-info.component';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        TimelineModule,
        SharedModule
    ],
    exports: [
        HomeComponent,
    ],
    declarations: [
        HomeComponent,
        ResumeComponent,
        MyInfoComponent,
        MyProductComponent,
        MySkillComponent,
        ResumeProCardComponent,
        BlogComponent,
        BlogItemComponent,
        SideComponent
    ]
})
export class HomeModule { }
