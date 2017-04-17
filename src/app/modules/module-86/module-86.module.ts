import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module86RoutingModule } from './module-86-routing.module';
import { Module86CompComponent } from './components/module-86-comp/module-86-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module86RoutingModule
  ],
  declarations: [Module86CompComponent]
})
export class Module86Module { }
