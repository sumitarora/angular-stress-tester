import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module39RoutingModule } from './module-39-routing.module';
import { Module39CompComponent } from './components/module-39-comp/module-39-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module39RoutingModule
  ],
  declarations: [Module39CompComponent]
})
export class Module39Module { }
