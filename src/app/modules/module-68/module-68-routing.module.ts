import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module68CompComponent } from './components/module-68-comp/module-68-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module68CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module68RoutingModule { }
