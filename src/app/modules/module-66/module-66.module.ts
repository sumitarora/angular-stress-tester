import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module66RoutingModule } from './module-66-routing.module';
import { Module66CompComponent } from './components/module-66-comp/module-66-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module66RoutingModule
  ],
  declarations: [Module66CompComponent]
})
export class Module66Module { }
