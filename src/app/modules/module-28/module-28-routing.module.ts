import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module28CompComponent } from './components/module-28-comp/module-28-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module28CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module28RoutingModule { }
