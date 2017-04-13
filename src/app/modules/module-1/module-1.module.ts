import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module-1-routing.module';
import { Module1CompComponent } from './components/module-1-comp/module-1-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  declarations: [Module1CompComponent]
})
export class Module1Module { }
