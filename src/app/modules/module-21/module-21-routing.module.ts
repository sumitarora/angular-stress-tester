import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module21CompComponent } from './components/module-21-comp/module-21-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module21CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module21RoutingModule { }
