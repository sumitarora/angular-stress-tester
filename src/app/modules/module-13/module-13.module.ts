import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module13RoutingModule } from './module-13-routing.module';
import { Module13CompComponent } from './components/module-13-comp/module-13-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module13RoutingModule
  ],
  declarations: [Module13CompComponent]
})
export class Module13Module { }
