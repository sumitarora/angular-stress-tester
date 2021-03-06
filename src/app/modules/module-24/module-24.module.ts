import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module24RoutingModule } from './module-24-routing.module';
import { Module24CompComponent } from './components/module-24-comp/module-24-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module24RoutingModule
  ],
  declarations: [Module24CompComponent]
})
export class Module24Module { }
