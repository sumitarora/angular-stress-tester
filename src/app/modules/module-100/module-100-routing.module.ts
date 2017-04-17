import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module100CompComponent } from './components/module-100-comp/module-100-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module100CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module100RoutingModule { }
