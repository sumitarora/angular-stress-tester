import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module82CompComponent } from './components/module-82-comp/module-82-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module82CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module82RoutingModule { }
