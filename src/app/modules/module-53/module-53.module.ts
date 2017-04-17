import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module53RoutingModule } from './module-53-routing.module';
import { Module53CompComponent } from './components/module-53-comp/module-53-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module53RoutingModule
  ],
  declarations: [Module53CompComponent]
})
export class Module53Module { }
