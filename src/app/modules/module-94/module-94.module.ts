import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module94RoutingModule } from './module-94-routing.module';
import { Module94CompComponent } from './components/module-94-comp/module-94-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module94RoutingModule
  ],
  declarations: [Module94CompComponent]
})
export class Module94Module { }
