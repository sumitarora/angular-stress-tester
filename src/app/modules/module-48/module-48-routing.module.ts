import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module48CompComponent } from './components/module-48-comp/module-48-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module48CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module48RoutingModule { }
