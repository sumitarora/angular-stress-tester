import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module63CompComponent } from './components/module-63-comp/module-63-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module63CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module63RoutingModule { }
