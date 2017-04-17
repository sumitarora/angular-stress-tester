import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module23RoutingModule } from './module-23-routing.module';
import { Module23CompComponent } from './components/module-23-comp/module-23-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module23RoutingModule
  ],
  declarations: [Module23CompComponent]
})
export class Module23Module { }
