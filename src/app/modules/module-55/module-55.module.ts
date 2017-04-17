import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module55RoutingModule } from './module-55-routing.module';
import { Module55CompComponent } from './components/module-55-comp/module-55-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module55RoutingModule
  ],
  declarations: [Module55CompComponent]
})
export class Module55Module { }
