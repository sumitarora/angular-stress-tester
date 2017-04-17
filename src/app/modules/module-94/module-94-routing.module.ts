import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module94CompComponent } from './components/module-94-comp/module-94-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module94CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module94RoutingModule { }
