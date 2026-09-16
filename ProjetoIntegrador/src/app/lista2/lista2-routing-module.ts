import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1 } from './ex1/ex1';

const routes: Routes = [
   {path:'ex1', component: Ex1}
   {path:'ex2', component: Ex2}
   {path:'ex3', component: Ex3}
   {path:'ex4', component: Ex4}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lista2RoutingModule {}
