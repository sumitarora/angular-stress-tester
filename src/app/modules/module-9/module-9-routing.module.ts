import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module9CompComponent } from './components/module-9-comp/module-9-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module9CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module9RoutingModule { }
