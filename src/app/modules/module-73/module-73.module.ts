import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module73RoutingModule } from './module-73-routing.module';
import { Module73CompComponent } from './components/module-73-comp/module-73-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module73RoutingModule
  ],
  declarations: [Module73CompComponent]
})
export class Module73Module { }
