import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module91RoutingModule } from './module-91-routing.module';
import { Module91CompComponent } from './components/module-91-comp/module-91-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module91RoutingModule
  ],
  declarations: [Module91CompComponent]
})
export class Module91Module { }
