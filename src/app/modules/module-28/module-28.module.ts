import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module28RoutingModule } from './module-28-routing.module';
import { Module28CompComponent } from './components/module-28-comp/module-28-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module28RoutingModule
  ],
  declarations: [Module28CompComponent]
})
export class Module28Module { }
