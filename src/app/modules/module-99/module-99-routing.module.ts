import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module99CompComponent } from './components/module-99-comp/module-99-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module99CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module99RoutingModule { }
