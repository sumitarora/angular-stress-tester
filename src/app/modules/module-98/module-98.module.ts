import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module98RoutingModule } from './module-98-routing.module';
import { Module98CompComponent } from './components/module-98-comp/module-98-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module98RoutingModule
  ],
  declarations: [Module98CompComponent]
})
export class Module98Module { }
