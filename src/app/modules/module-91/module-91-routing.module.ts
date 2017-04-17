import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module91CompComponent } from './components/module-91-comp/module-91-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module91CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module91RoutingModule { }
