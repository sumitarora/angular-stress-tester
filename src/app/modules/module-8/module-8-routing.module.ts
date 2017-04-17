import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module8CompComponent } from './components/module-8-comp/module-8-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module8CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module8RoutingModule { }
