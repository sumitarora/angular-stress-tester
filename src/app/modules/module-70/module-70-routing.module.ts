import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module70CompComponent } from './components/module-70-comp/module-70-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module70CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module70RoutingModule { }
