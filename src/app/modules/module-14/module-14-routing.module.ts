import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module14CompComponent } from './components/module-14-comp/module-14-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module14CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module14RoutingModule { }
