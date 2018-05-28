import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ResumeComponent } from './resume/resume.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', component: ResumeComponent },
            { path: 'blog', component: BlogComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
