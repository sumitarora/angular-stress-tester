import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module14RoutingModule } from './module-14-routing.module';
import { Module14CompComponent } from './components/module-14-comp/module-14-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module14RoutingModule
  ],
  declarations: [Module14CompComponent]
})
export class Module14Module { }
