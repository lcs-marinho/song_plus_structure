import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaCircularDuplamenteEncadeada } from './class/ListaCircularDuplamenteEncadeada';
import { Musica } from './interface/musica.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SelectMusicComponent } from './select-music/select-music.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SelectMusicComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'song_plus';
  constructor(private http: HttpClient) { }

  listaCircular?: ListaCircularDuplamenteEncadeada = new ListaCircularDuplamenteEncadeada();
  
  ngOnInit(): void {
  }

  
}


