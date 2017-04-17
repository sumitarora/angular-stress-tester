import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module35CompComponent } from './components/module-35-comp/module-35-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module35CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module35RoutingModule { }
