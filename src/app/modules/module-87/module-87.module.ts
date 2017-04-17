import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module87RoutingModule } from './module-87-routing.module';
import { Module87CompComponent } from './components/module-87-comp/module-87-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module87RoutingModule
  ],
  declarations: [Module87CompComponent]
})
export class Module87Module { }
