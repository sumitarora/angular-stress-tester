import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module65RoutingModule } from './module-65-routing.module';
import { Module65CompComponent } from './components/module-65-comp/module-65-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module65RoutingModule
  ],
  declarations: [Module65CompComponent]
})
export class Module65Module { }
