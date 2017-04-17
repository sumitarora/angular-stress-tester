import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module90CompComponent } from './components/module-90-comp/module-90-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module90CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module90RoutingModule { }
