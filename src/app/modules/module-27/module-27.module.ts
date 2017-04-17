import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module27RoutingModule } from './module-27-routing.module';
import { Module27CompComponent } from './components/module-27-comp/module-27-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module27RoutingModule
  ],
  declarations: [Module27CompComponent]
})
export class Module27Module { }
