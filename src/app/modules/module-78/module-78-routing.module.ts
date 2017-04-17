import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module78CompComponent } from './components/module-78-comp/module-78-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module78CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module78RoutingModule { }
