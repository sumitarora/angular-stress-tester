import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module40CompComponent } from './components/module-40-comp/module-40-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module40CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module40RoutingModule { }
