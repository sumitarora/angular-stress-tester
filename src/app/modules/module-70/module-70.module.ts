import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module70RoutingModule } from './module-70-routing.module';
import { Module70CompComponent } from './components/module-70-comp/module-70-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module70RoutingModule
  ],
  declarations: [Module70CompComponent]
})
export class Module70Module { }
