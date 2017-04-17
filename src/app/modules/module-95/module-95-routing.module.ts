import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module95CompComponent } from './components/module-95-comp/module-95-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module95CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module95RoutingModule { }
