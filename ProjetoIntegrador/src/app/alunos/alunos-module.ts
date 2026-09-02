import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing-module';
import { CadastrosAlunos } from './cadastros-alunos/cadastros-alunos';

@NgModule({
  declarations: [CadastrosAlunos],
  imports: [CommonModule, AlunosRoutingModule],
})
export class AlunosModule {
}


