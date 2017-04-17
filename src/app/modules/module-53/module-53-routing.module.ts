import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module53CompComponent } from './components/module-53-comp/module-53-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module53CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module53RoutingModule { }
