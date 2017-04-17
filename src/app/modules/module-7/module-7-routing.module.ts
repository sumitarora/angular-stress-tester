import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module7CompComponent } from './components/module-7-comp/module-7-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module7CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module7RoutingModule { }
