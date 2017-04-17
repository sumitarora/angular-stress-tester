import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module41RoutingModule } from './module-41-routing.module';
import { Module41CompComponent } from './components/module-41-comp/module-41-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module41RoutingModule
  ],
  declarations: [Module41CompComponent]
})
export class Module41Module { }
