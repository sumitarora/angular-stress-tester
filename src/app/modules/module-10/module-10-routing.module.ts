import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module10CompComponent } from './components/module-10-comp/module-10-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module10CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module10RoutingModule { }
