import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module66CompComponent } from './components/module-66-comp/module-66-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module66CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module66RoutingModule { }
