import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module62RoutingModule } from './module-62-routing.module';
import { Module62CompComponent } from './components/module-62-comp/module-62-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module62RoutingModule
  ],
  declarations: [Module62CompComponent]
})
export class Module62Module { }
