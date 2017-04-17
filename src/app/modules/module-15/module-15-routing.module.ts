import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module15CompComponent } from './components/module-15-comp/module-15-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module15CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module15RoutingModule { }
