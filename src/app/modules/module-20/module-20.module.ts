import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module20RoutingModule } from './module-20-routing.module';
import { Module20CompComponent } from './components/module-20-comp/module-20-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module20RoutingModule
  ],
  declarations: [Module20CompComponent]
})
export class Module20Module { }
