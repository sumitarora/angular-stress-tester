import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module81RoutingModule } from './module-81-routing.module';
import { Module81CompComponent } from './components/module-81-comp/module-81-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module81RoutingModule
  ],
  declarations: [Module81CompComponent]
})
export class Module81Module { }
