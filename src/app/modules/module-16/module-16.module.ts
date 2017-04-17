import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module16RoutingModule } from './module-16-routing.module';
import { Module16CompComponent } from './components/module-16-comp/module-16-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module16RoutingModule
  ],
  declarations: [Module16CompComponent]
})
export class Module16Module { }
