import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module43CompComponent } from './components/module-43-comp/module-43-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module43CompComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module43RoutingModule { }
