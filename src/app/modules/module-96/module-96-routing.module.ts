import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module96CompComponent } from './components/module-96-comp/module-96-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module96CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module96RoutingModule { }
