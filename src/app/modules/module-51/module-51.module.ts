import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module51RoutingModule } from './module-51-routing.module';
import { Module51CompComponent } from './components/module-51-comp/module-51-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module51RoutingModule
  ],
  declarations: [Module51CompComponent]
})
export class Module51Module { }
