import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module85RoutingModule } from './module-85-routing.module';
import { Module85CompComponent } from './components/module-85-comp/module-85-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module85RoutingModule
  ],
  declarations: [Module85CompComponent]
})
export class Module85Module { }
