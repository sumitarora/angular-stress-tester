import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module97CompComponent } from './components/module-97-comp/module-97-comp.component';

const routes: Routes = [
  {
    path: '',
    component: Module97CompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module97RoutingModule { }
