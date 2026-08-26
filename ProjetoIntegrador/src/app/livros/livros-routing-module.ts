import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cadastros } from './cadastros/cadastros'
import { Listagem } from './listagem/listagem';

const routes: Routes = [
 {path: 'cadastros', component: Cadastros},
 {path: 'listagem', component: Listagem}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosRoutingModule {}
