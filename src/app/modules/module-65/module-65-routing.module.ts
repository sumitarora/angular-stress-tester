import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module65CompComponent } from './components/module-65-comp/module-65-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module65CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module65RoutingModule { }
