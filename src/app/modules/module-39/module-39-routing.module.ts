import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module39CompComponent } from './components/module-39-comp/module-39-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module39CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module39RoutingModule { }
