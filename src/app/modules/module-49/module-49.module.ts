import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module49RoutingModule } from './module-49-routing.module';
import { Module49CompComponent } from './components/module-49-comp/module-49-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module49RoutingModule
  ],
  declarations: [Module49CompComponent]
})
export class Module49Module { }
