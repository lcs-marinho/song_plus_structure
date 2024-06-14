import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaCircularDuplamenteEncadeada } from './class/ListaCircularDuplamenteEncadeada';
import { No } from './class/No';
import { Musica } from './interface/musica.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'song_plus';

  lista?: ListaCircularDuplamenteEncadeada = new ListaCircularDuplamenteEncadeada();

  listaMusicas: Musica[] = [
    {
      nome: 'November Rain',
      duracao: 240,
      capa : ''
    },
    {
      nome: 'Rei da cacibinha',
      duracao: 240,
      capa : ''
    },
    {
      nome: 'One',
      duracao: 240,
      capa : ''
    },
    {
      nome: 'Natureza das Coisas',
      duracao: 240,
      capa : ''
    },
    {
      nome: 'Colo de menina',
      duracao: 240,
      capa : ''
    }
  ];
  
  ngOnInit(): void {
   
    this.lista?.adicionar(new No(this.listaMusicas[0]));
    
    this.lista?.adicionar(new No(this.listaMusicas[1]));

    this.lista?.adicionar(new No(this.listaMusicas[2]));

    this.lista?.adicionar(new No(this.listaMusicas[3]));
   
    this.lista?.adicionar(new No(this.listaMusicas[4]));

    this.lista?.imprimirLista();
    
  
  }
}
