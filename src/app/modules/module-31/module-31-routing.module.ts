import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module31CompComponent } from './components/module-31-comp/module-31-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module31CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module31RoutingModule { }
