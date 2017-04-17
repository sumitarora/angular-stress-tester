import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module15RoutingModule } from './module-15-routing.module';
import { Module15CompComponent } from './components/module-15-comp/module-15-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module15RoutingModule
  ],
  declarations: [Module15CompComponent]
})
export class Module15Module { }
