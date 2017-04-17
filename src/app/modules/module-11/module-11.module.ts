import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module11RoutingModule } from './module-11-routing.module';
import { Module11CompComponent } from './components/module-11-comp/module-11-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module11RoutingModule
  ],
  declarations: [Module11CompComponent]
})
export class Module11Module { }
