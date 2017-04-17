import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module100RoutingModule } from './module-100-routing.module';
import { Module100CompComponent } from './components/module-100-comp/module-100-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module100RoutingModule
  ],
  declarations: [Module100CompComponent]
})
export class Module100Module { }
