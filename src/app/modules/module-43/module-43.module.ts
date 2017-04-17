import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module43RoutingModule } from './module-43-routing.module';
import { Module43CompComponent } from './components/module-43-comp/module-43-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module43RoutingModule
  ],
  declarations: [Module43CompComponent]
})
export class Module43Module { }
