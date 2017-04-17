import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module74RoutingModule } from './module-74-routing.module';
import { Module74CompComponent } from './components/module-74-comp/module-74-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module74RoutingModule
  ],
  declarations: [Module74CompComponent]
})
export class Module74Module { }
