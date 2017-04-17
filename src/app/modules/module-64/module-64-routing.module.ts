import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module64CompComponent } from './components/module-64-comp/module-64-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module64CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module64RoutingModule { }
