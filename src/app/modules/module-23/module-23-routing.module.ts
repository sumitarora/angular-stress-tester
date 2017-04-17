import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module23CompComponent } from './components/module-23-comp/module-23-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module23CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module23RoutingModule { }
