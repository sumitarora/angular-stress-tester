import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module22CompComponent } from './components/module-22-comp/module-22-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module22CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module22RoutingModule { }
