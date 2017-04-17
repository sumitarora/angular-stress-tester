import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module17CompComponent } from './components/module-17-comp/module-17-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module17CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module17RoutingModule { }
