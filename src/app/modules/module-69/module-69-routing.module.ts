import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module69CompComponent } from './components/module-69-comp/module-69-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module69CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module69RoutingModule { }
