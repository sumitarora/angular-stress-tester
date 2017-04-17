import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module3CompComponent } from './components/module-3-comp/module-3-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module3CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module3RoutingModule { }
