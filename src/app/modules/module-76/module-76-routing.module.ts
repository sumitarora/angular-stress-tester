import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module76CompComponent } from './components/module-76-comp/module-76-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module76CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module76RoutingModule { }
