import { Routes, RouterModule } from '@angular/router';
import { EssayComponent } from './essay.component';


const routes: Routes = [
  {
    path: '',
    component: EssayComponent
  }
];

export const EssayRoutes = RouterModule.forChild(routes);
