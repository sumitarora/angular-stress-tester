import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module85CompComponent } from './components/module-85-comp/module-85-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module85CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module85RoutingModule { }
