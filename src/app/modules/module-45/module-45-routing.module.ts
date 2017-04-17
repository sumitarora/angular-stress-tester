import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module45CompComponent } from './components/module-45-comp/module-45-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module45CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module45RoutingModule { }
