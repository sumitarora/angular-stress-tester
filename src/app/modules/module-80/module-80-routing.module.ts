import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module80CompComponent } from './components/module-80-comp/module-80-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module80CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module80RoutingModule { }
