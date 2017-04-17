import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module80RoutingModule } from './module-80-routing.module';
import { Module80CompComponent } from './components/module-80-comp/module-80-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module80RoutingModule
  ],
  declarations: [Module80CompComponent]
})
export class Module80Module { }
