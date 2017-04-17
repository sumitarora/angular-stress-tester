import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module55CompComponent } from './components/module-55-comp/module-55-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module55CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module55RoutingModule { }
