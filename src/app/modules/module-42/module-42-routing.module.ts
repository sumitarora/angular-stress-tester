import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module42CompComponent } from './components/module-42-comp/module-42-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module42CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module42RoutingModule { }
