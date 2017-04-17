import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module56CompComponent } from './components/module-56-comp/module-56-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module56CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module56RoutingModule { }
