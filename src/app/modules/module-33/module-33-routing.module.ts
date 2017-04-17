import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module33CompComponent } from './components/module-33-comp/module-33-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module33CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module33RoutingModule { }
