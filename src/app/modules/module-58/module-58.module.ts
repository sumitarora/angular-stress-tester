import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module58RoutingModule } from './module-58-routing.module';
import { Module58CompComponent } from './components/module-58-comp/module-58-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module58RoutingModule
  ],
  declarations: [Module58CompComponent]
})
export class Module58Module { }
