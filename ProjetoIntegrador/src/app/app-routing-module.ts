import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: 'livros',
  loadChildren:() => import('./livros/livros-module').then(m => m.LivrosModule)
},
{
  path: 'alunos',
  loadChildren:() => import('./alunos/alunos-module').then(m => m.AlunosModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
