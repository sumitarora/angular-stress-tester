import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module57RoutingModule } from './module-57-routing.module';
import { Module57CompComponent } from './components/module-57-comp/module-57-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module57RoutingModule
  ],
  declarations: [Module57CompComponent]
})
export class Module57Module { }
