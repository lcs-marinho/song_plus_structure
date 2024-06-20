import { Component, ViewChild } from '@angular/core';
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
  @ViewChild('select') selectApp?: SelectMusicComponent;

  title = 'song_plus';
  msgAudio: any = null;
  constructor() { }

  listaCircular?: ListaCircularDuplamenteEncadeada = new ListaCircularDuplamenteEncadeada();
  listaEspelhada: Musica[] = [];

  cursor?: No;
  
  ngOnInit(): void {
    
  }

  musicaAdd(ev: any) {
    if(ev == null || ev == undefined) {
      return;
    }

    this.listaCircular?.adicionar(new No(ev));

    this.msgAudio = 'TOCANDO AGORA';

    if(this.listaEspelhada.length > 0) 
    {
      this.listaEspelhada.splice(1,0,ev);
    }
    else
    {
      this.listaEspelhada.push(ev);
      this.cursor = this.listaCircular?.imprimirCursor();
    }
  }

  avancarV() {
    this.listaCircular?.avancar();
    this.cursor = this.listaCircular?.imprimirCursor();
  }

  voltarV(){
    this.listaCircular?.voltar();
    this.cursor = this.listaCircular?.imprimirCursor();
  }

  remover(musica: Musica, index: number) {
    this.selectApp?.listaMusicas.push(musica);
    this.listaEspelhada.splice(index,1);
    this.listaCircular?.removerNo(musica);
  }
  

}


