import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module76RoutingModule } from './module-76-routing.module';
import { Module76CompComponent } from './components/module-76-comp/module-76-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module76RoutingModule
  ],
  declarations: [Module76CompComponent]
})
export class Module76Module { }
