import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module32RoutingModule } from './module-32-routing.module';
import { Module32CompComponent } from './components/module-32-comp/module-32-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module32RoutingModule
  ],
  declarations: [Module32CompComponent]
})
export class Module32Module { }
