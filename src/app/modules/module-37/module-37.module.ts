import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module37RoutingModule } from './module-37-routing.module';
import { Module37CompComponent } from './components/module-37-comp/module-37-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module37RoutingModule
  ],
  declarations: [Module37CompComponent]
})
export class Module37Module { }
