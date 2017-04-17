import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module52CompComponent } from './components/module-52-comp/module-52-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module52CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module52RoutingModule { }
