import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module63RoutingModule } from './module-63-routing.module';
import { Module63CompComponent } from './components/module-63-comp/module-63-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module63RoutingModule
  ],
  declarations: [Module63CompComponent]
})
export class Module63Module { }
