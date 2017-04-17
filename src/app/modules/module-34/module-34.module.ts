import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module34RoutingModule } from './module-34-routing.module';
import { Module34CompComponent } from './components/module-34-comp/module-34-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module34RoutingModule
  ],
  declarations: [Module34CompComponent]
})
export class Module34Module { }
