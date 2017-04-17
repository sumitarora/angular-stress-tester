import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module84RoutingModule } from './module-84-routing.module';
import { Module84CompComponent } from './components/module-84-comp/module-84-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module84RoutingModule
  ],
  declarations: [Module84CompComponent]
})
export class Module84Module { }
