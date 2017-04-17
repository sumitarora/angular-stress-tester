import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module2CompComponent } from './components/module-2-comp/module-2-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module2CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
