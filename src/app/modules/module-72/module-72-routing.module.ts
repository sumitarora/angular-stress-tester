import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module72CompComponent } from './components/module-72-comp/module-72-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module72CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module72RoutingModule { }
