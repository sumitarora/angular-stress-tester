import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module20CompComponent } from './components/module-20-comp/module-20-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module20CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module20RoutingModule { }
