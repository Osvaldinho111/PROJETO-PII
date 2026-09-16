import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lista2RoutingModule } from './lista2-routing-module';
import { Ex1 } from './ex1/ex1';

@NgModule({
  declarations: [Ex1],
  imports: [CommonModule, Lista2RoutingModule],
})
export class Lista2Module {}
