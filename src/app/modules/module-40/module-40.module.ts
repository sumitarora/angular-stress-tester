import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module40RoutingModule } from './module-40-routing.module';
import { Module40CompComponent } from './components/module-40-comp/module-40-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module40RoutingModule
  ],
  declarations: [Module40CompComponent]
})
export class Module40Module { }
