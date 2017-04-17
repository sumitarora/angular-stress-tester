import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module92CompComponent } from './components/module-92-comp/module-92-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module92CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module92RoutingModule { }
