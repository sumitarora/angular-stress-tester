import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module47RoutingModule } from './module-47-routing.module';
import { Module47CompComponent } from './components/module-47-comp/module-47-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module47RoutingModule
  ],
  declarations: [Module47CompComponent]
})
export class Module47Module { }
