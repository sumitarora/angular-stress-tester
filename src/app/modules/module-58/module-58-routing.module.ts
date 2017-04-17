import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module58CompComponent } from './components/module-58-comp/module-58-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module58CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module58RoutingModule { }
