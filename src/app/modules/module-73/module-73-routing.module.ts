import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module73CompComponent } from './components/module-73-comp/module-73-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module73CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module73RoutingModule { }
