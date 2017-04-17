import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module97RoutingModule } from './module-97-routing.module';
import { Module97CompComponent } from './components/module-97-comp/module-97-comp.component';

@NgModule({
  imports: [
    CommonModule,
    Module97RoutingModule
  ],
  declarations: [Module97CompComponent]
})
export class Module97Module { }
