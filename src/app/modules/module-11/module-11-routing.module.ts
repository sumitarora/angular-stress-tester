import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module11CompComponent } from './components/module-11-comp/module-11-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module11CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module11RoutingModule { }
