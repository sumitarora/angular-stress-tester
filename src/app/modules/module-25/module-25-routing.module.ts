import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module25CompComponent } from './components/module-25-comp/module-25-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module25CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module25RoutingModule { }
