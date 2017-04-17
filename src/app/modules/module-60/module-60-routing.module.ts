import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module60CompComponent } from './components/module-60-comp/module-60-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module60CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module60RoutingModule { }
