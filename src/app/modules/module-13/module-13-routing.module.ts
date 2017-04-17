import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module13CompComponent } from './components/module-13-comp/module-13-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module13CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module13RoutingModule { }
