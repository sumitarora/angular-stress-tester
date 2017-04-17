import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module5CompComponent } from './components/module-5-comp/module-5-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module5CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module5RoutingModule { }
