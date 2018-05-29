import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const _HomeModule = './home/home.module#HomeModule';
const _EssayModule = './essay/essay.module#EssayModule';

// const _UpEndModule = './up-end/up-end.module#UpEndModule';
const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  // {
  //   path: 'eassy/:id',
  //   loadChildren: _EssayModule
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
