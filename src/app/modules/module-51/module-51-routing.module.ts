import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module51CompComponent } from './components/module-51-comp/module-51-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module51CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module51RoutingModule { }
