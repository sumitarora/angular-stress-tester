import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module86CompComponent } from './components/module-86-comp/module-86-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module86CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module86RoutingModule { }
