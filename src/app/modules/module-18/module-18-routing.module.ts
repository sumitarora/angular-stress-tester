import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module18CompComponent } from './components/module-18-comp/module-18-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module18CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module18RoutingModule { }
