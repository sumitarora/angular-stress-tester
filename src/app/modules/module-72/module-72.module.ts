import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module72RoutingModule } from './module-72-routing.module';
import { Module72CompComponent } from './components/module-72-comp/module-72-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module72RoutingModule
  ],
  declarations: [Module72CompComponent]
})
export class Module72Module { }
