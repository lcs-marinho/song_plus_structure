import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaCircularDuplamenteEncadeada } from './class/ListaCircularDuplamenteEncadeada';
import { Musica } from './interface/musica.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SelectMusicComponent } from './select-music/select-music.component';
import { No } from './class/No';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SelectMusicComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'song_plus';
  listaMusica: Musica[] = [];
  listaEspelhada:  Musica[] = [];

  getListaDeMusicas(): void {
    this.http.get('assets/database.json').subscribe(it => {
      this.listaMusica = it as Musica[];
    })
  }

  constructor(private http: HttpClient) { this.getListaDeMusicas() }

  listaCircular?: ListaCircularDuplamenteEncadeada = new ListaCircularDuplamenteEncadeada();
  
  ngOnInit(): void {
  }

  addListCircular(ev:any ) {
    this.listaCircular?.adicionar(new No(this.listaMusica[ev]));
    this.listaEspelhada = [...this.listaCircular?.copiarListCircular()!];
  }
  
}


