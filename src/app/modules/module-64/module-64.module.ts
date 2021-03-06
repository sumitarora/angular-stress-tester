import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module64RoutingModule } from './module-64-routing.module';
import { Module64CompComponent } from './components/module-64-comp/module-64-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module64RoutingModule
  ],
  declarations: [Module64CompComponent]
})
export class Module64Module { }
