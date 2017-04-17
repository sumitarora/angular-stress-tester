import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module93CompComponent } from './components/module-93-comp/module-93-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module93CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module93RoutingModule { }
