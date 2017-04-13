import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module1CompComponent } from './components/module-1-comp/module-1-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module1CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
