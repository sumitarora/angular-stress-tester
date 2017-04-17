import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module31RoutingModule } from './module-31-routing.module';
import { Module31CompComponent } from './components/module-31-comp/module-31-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module31RoutingModule
  ],
  declarations: [Module31CompComponent]
})
export class Module31Module { }
