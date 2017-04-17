import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module50CompComponent } from './components/module-50-comp/module-50-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module50CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module50RoutingModule { }
