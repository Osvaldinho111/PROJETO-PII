import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercicio2 } from './exercicio2/exercicio2';
import { Exercicio1 } from './exercicio1/exercicio-1';

const routes: Routes = [
  {path:'exercicio-1', component: Exercicio1},
  {path:'exercicio-1', component: Exercicio2},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex1RoutingModule {}
