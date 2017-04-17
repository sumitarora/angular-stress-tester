import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module6CompComponent } from './components/module-6-comp/module-6-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module6CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module6RoutingModule { }
