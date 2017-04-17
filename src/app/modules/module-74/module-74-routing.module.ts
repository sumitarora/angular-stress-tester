import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module74CompComponent } from './components/module-74-comp/module-74-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module74CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module74RoutingModule { }
