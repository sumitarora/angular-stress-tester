import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module37CompComponent } from './components/module-37-comp/module-37-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module37CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module37RoutingModule { }
