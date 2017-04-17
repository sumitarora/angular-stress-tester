import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module89CompComponent } from './components/module-89-comp/module-89-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module89CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module89RoutingModule { }
