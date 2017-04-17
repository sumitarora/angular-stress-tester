import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module84CompComponent } from './components/module-84-comp/module-84-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module84CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module84RoutingModule { }
