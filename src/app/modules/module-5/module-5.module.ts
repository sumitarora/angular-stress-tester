import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module5RoutingModule } from './module-5-routing.module';
import { Module5CompComponent } from './components/module-5-comp/module-5-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module5RoutingModule
  ],
  declarations: [Module5CompComponent]
})
export class Module5Module { }
