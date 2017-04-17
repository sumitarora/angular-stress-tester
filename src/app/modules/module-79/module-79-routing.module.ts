import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module79CompComponent } from './components/module-79-comp/module-79-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module79CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module79RoutingModule { }
