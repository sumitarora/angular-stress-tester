import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module7RoutingModule } from './module-7-routing.module';
import { Module7CompComponent } from './components/module-7-comp/module-7-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module7RoutingModule
  ],
  declarations: [Module7CompComponent]
})
export class Module7Module { }
