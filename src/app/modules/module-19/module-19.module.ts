import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module19RoutingModule } from './module-19-routing.module';
import { Module19CompComponent } from './components/module-19-comp/module-19-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module19RoutingModule
  ],
  declarations: [Module19CompComponent]
})
export class Module19Module { }
