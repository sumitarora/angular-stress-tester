import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module69RoutingModule } from './module-69-routing.module';
import { Module69CompComponent } from './components/module-69-comp/module-69-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module69RoutingModule
  ],
  declarations: [Module69CompComponent]
})
export class Module69Module { }
