import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module57CompComponent } from './components/module-57-comp/module-57-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module57CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module57RoutingModule { }
