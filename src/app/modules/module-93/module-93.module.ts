import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module93RoutingModule } from './module-93-routing.module';
import { Module93CompComponent } from './components/module-93-comp/module-93-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module93RoutingModule
  ],
  declarations: [Module93CompComponent]
})
export class Module93Module { }
