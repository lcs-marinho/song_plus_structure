import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Musica } from '../interface/musica.interface';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-music',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './select-music.component.html',
  styleUrl: './select-music.component.scss'
})
export class SelectMusicComponent {
  @Output() addMusic: EventEmitter<Musica> = new EventEmitter();
  form?: FormGroup;
  listaMusicas: Musica[] = [];

  constructor(private http: HttpClient,private fb: FormBuilder) { 
    this.form = this.fb.group({
      musica: ['']
    })
  }

  ngOnInit(): void {
    this.getListaDeMusicas();
  }

  getListaDeMusicas(): void {
    this.http.get('assets/database.json').subscribe(it => {
      this.listaMusicas = it as Musica[];
    })
  }

  onSubmit(){
    const index = parseInt(this.form?.value.musica);
    this.addMusic.emit(this.listaMusicas[index]);
    this.listaMusicas.splice(index,1);
    this.form?.reset();
  }

}
