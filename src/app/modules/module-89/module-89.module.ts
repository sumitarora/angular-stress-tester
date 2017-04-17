import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module89RoutingModule } from './module-89-routing.module';
import { Module89CompComponent } from './components/module-89-comp/module-89-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module89RoutingModule
  ],
  declarations: [Module89CompComponent]
})
export class Module89Module { }
