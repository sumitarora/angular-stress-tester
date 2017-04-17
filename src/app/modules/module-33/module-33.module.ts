import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module33RoutingModule } from './module-33-routing.module';
import { Module33CompComponent } from './components/module-33-comp/module-33-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module33RoutingModule
  ],
  declarations: [Module33CompComponent]
})
export class Module33Module { }
