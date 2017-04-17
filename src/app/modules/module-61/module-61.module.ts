import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module61RoutingModule } from './module-61-routing.module';
import { Module61CompComponent } from './components/module-61-comp/module-61-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module61RoutingModule
  ],
  declarations: [Module61CompComponent]
})
export class Module61Module { }
