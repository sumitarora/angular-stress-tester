import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module4CompComponent } from './components/module-4-comp/module-4-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module4CompComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module4RoutingModule { }
