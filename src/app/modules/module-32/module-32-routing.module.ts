import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module32CompComponent } from './components/module-32-comp/module-32-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module32CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module32RoutingModule { }
