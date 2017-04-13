import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Comp1Component } from './components/comp-1/comp-1.component';

const routes: Routes = [
  {
    path: '',
    component: Comp1Component
  },
  {
    path: 'module1',
    loadChildren: 'app/modules/module-1/module-1.module#Module1Module'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
