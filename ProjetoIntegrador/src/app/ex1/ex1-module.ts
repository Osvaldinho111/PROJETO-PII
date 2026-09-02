import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ex1RoutingModule } from './ex1-routing-module';
import { Exercicio1 } from './exercicio1/exercicio-1';
import { Exercicio2 } from './exercicio2/exercicio2';
import { Exercicio3 } from './exercicio3/exercicio3';

@NgModule({
  declarations: [Exercicio1, Exercicio2, Exercicio3],
  imports: [CommonModule, Ex1RoutingModule],
})
export class Ex1Module {}
