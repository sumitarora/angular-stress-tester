import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module44CompComponent } from './components/module-44-comp/module-44-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module44CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module44RoutingModule { }
