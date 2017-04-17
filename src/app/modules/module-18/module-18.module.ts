import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module18RoutingModule } from './module-18-routing.module';
import { Module18CompComponent } from './components/module-18-comp/module-18-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module18RoutingModule
  ],
  declarations: [Module18CompComponent]
})
export class Module18Module { }
