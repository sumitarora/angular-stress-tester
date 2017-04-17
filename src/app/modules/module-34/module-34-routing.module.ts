import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module34CompComponent } from './components/module-34-comp/module-34-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module34CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module34RoutingModule { }
