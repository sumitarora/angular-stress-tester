import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module52RoutingModule } from './module-52-routing.module';
import { Module52CompComponent } from './components/module-52-comp/module-52-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module52RoutingModule
  ],
  declarations: [Module52CompComponent]
})
export class Module52Module { }
