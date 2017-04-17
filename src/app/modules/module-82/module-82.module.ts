import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module82RoutingModule } from './module-82-routing.module';
import { Module82CompComponent } from './components/module-82-comp/module-82-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module82RoutingModule
  ],
  declarations: [Module82CompComponent]
})
export class Module82Module { }
