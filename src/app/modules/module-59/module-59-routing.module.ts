import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module59CompComponent } from './components/module-59-comp/module-59-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module59CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module59RoutingModule { }
