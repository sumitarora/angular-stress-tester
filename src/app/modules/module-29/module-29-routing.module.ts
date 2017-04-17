import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module29CompComponent } from './components/module-29-comp/module-29-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module29CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module29RoutingModule { }
