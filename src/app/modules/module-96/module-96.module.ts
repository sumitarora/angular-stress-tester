import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module96RoutingModule } from './module-96-routing.module';
import { Module96CompComponent } from './components/module-96-comp/module-96-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module96RoutingModule
  ],
  declarations: [Module96CompComponent]
})
export class Module96Module { }
