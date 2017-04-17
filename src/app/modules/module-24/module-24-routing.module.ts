import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module24CompComponent } from './components/module-24-comp/module-24-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module24CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module24RoutingModule { }
