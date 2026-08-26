import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrosAlunos } from './cadastros-alunos/cadastros-alunos';

const routes: Routes = [
  {path: 'cadastros-alunos', component: CadastrosAlunos}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
