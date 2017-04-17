import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module75CompComponent } from './components/module-75-comp/module-75-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module75CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module75RoutingModule { }
