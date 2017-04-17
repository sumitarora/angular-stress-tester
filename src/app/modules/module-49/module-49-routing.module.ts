import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module49CompComponent } from './components/module-49-comp/module-49-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module49CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module49RoutingModule { }
