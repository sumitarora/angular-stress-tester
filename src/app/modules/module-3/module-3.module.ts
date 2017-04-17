import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module3RoutingModule } from './module-3-routing.module';
import { Module3CompComponent } from './components/module-3-comp/module-3-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module3RoutingModule
  ],
  declarations: [Module3CompComponent]
})
export class Module3Module { }
