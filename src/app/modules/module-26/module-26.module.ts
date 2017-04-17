import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module26RoutingModule } from './module-26-routing.module';
import { Module26CompComponent } from './components/module-26-comp/module-26-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module26RoutingModule
  ],
  declarations: [Module26CompComponent]
})
export class Module26Module { }
