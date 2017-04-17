import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module98CompComponent } from './components/module-98-comp/module-98-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module98CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module98RoutingModule { }
