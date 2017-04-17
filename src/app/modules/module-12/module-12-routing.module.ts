import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module12CompComponent } from './components/module-12-comp/module-12-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module12CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module12RoutingModule { }
