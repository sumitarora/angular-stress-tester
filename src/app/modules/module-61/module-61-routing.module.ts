import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module61CompComponent } from './components/module-61-comp/module-61-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module61CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module61RoutingModule { }
