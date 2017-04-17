import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module71CompComponent } from './components/module-71-comp/module-71-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module71CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module71RoutingModule { }
