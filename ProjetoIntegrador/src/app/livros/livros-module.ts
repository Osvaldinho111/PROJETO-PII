import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing-module';
import { Cadastros } from './cadastros/cadastros';
import { Listagem } from './listagem/listagem';

@NgModule({
  declarations: [Cadastros, Listagem],
  imports: [CommonModule, LivrosRoutingModule],
})
export class LivrosModule {}
