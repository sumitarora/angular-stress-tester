import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module54CompComponent } from './components/module-54-comp/module-54-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module54CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module54RoutingModule { }
