import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module36RoutingModule } from './module-36-routing.module';
import { Module36CompComponent } from './components/module-36-comp/module-36-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module36RoutingModule
  ],
  declarations: [Module36CompComponent]
})
export class Module36Module { }
