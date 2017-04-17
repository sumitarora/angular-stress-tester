import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module47CompComponent } from './components/module-47-comp/module-47-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module47CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module47RoutingModule { }
