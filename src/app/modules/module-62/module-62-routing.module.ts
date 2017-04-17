import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module62CompComponent } from './components/module-62-comp/module-62-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module62CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module62RoutingModule { }
