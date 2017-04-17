import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module6RoutingModule } from './module-6-routing.module';
import { Module6CompComponent } from './components/module-6-comp/module-6-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module6RoutingModule
  ],
  declarations: [Module6CompComponent]
})
export class Module6Module { }
