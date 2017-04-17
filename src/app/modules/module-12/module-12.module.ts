import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module12RoutingModule } from './module-12-routing.module';
import { Module12CompComponent } from './components/module-12-comp/module-12-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module12RoutingModule
  ],
  declarations: [Module12CompComponent]
})
export class Module12Module { }
