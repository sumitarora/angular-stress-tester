import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module16CompComponent } from './components/module-16-comp/module-16-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module16CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module16RoutingModule { }
