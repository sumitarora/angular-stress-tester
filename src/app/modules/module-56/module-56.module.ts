import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module56RoutingModule } from './module-56-routing.module';
import { Module56CompComponent } from './components/module-56-comp/module-56-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module56RoutingModule
  ],
  declarations: [Module56CompComponent]
})
export class Module56Module { }
