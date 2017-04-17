import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module67CompComponent } from './components/module-67-comp/module-67-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module67CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module67RoutingModule { }
