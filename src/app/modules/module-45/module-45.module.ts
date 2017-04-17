import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module45RoutingModule } from './module-45-routing.module';
import { Module45CompComponent } from './components/module-45-comp/module-45-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module45RoutingModule
  ],
  declarations: [Module45CompComponent]
})
export class Module45Module { }
