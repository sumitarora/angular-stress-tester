import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module77RoutingModule } from './module-77-routing.module';
import { Module77CompComponent } from './components/module-77-comp/module-77-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module77RoutingModule
  ],
  declarations: [Module77CompComponent]
})
export class Module77Module { }
