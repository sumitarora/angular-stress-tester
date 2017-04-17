import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module30RoutingModule } from './module-30-routing.module';
import { Module30CompComponent } from './components/module-30-comp/module-30-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module30RoutingModule
  ],
  declarations: [Module30CompComponent]
})
export class Module30Module { }
