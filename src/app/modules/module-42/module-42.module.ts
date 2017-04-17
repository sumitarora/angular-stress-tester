import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module42RoutingModule } from './module-42-routing.module';
import { Module42CompComponent } from './components/module-42-comp/module-42-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module42RoutingModule
  ],
  declarations: [Module42CompComponent]
})
export class Module42Module { }
