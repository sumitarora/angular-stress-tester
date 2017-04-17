import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module19CompComponent } from './components/module-19-comp/module-19-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module19CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module19RoutingModule { }
