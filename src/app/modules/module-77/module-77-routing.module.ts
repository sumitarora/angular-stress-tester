import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module77CompComponent } from './components/module-77-comp/module-77-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module77CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module77RoutingModule { }
