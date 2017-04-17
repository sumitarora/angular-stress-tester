import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module46CompComponent } from './components/module-46-comp/module-46-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module46CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module46RoutingModule { }
