import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module38CompComponent } from './components/module-38-comp/module-38-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module38CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module38RoutingModule { }
