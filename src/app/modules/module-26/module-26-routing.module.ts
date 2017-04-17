import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module26CompComponent } from './components/module-26-comp/module-26-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module26CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module26RoutingModule { }
