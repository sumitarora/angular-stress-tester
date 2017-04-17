import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module87CompComponent } from './components/module-87-comp/module-87-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module87CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module87RoutingModule { }
