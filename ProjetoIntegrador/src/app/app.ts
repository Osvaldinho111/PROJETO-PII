import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ProjetoIntegrador');

  cabecalhoLoja = 'Loja Angular';

  NomeProduto1 = 'Fone de ouvido';
  precoProduto1 = 55;
  Disponivel1 = true;

  NomeProduto2 = 'Processador';
  precoProduto2 = 1300;
  Disponivel2 = true;

  NomeProduto3 = 'Placa de video';
  precoProduto3 = 6000;
  Disponivel3 = false;
}