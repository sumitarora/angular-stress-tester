import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module29RoutingModule } from './module-29-routing.module';
import { Module29CompComponent } from './components/module-29-comp/module-29-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module29RoutingModule
  ],
  declarations: [Module29CompComponent]
})
export class Module29Module { }
