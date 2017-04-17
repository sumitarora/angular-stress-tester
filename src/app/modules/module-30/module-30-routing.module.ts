import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module30CompComponent } from './components/module-30-comp/module-30-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module30CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module30RoutingModule { }
