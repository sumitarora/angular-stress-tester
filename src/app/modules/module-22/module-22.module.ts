import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module22RoutingModule } from './module-22-routing.module';
import { Module22CompComponent } from './components/module-22-comp/module-22-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module22RoutingModule
  ],
  declarations: [Module22CompComponent]
})
export class Module22Module { }
