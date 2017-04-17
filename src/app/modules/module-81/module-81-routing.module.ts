import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module81CompComponent } from './components/module-81-comp/module-81-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module81CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module81RoutingModule { }
