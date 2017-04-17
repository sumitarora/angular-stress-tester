import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module41CompComponent } from './components/module-41-comp/module-41-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module41CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module41RoutingModule { }
