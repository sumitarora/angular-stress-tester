import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module10RoutingModule } from './module-10-routing.module';
import { Module10CompComponent } from './components/module-10-comp/module-10-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module10RoutingModule
  ],
  declarations: [Module10CompComponent]
})
export class Module10Module { }
