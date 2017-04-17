import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module36CompComponent } from './components/module-36-comp/module-36-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module36CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module36RoutingModule { }
