import { No } from './No';
import { Musica } from '../interface/musica.interface';

export class ListaCircularDuplamenteEncadeada {
   private cursor?: No | null;
   private quantidade: number = 0;

  constructor() {}

  public imprimirCursor(): void {
    if (this.cursor != null) {
      console.log('Cursor: ' + '{nome: ' + this.cursor?.getDado()?.nome + '}');
    }
  }

  public imprimirLista(): void {
    for (let i = 1; i <= this.quantidade; i++) {
      console.log(this.cursor?.getDado());
      if (i == this.quantidade) {
        console.log('Quantidade: ' + this.getQuantidade());
      }
      this.avancar();
    }
  }

  public adicionar(novo: No): void {
    if (this.getQuantidade() == 0) {
      novo.setProximo(novo);
      novo.setAnterior(novo);
      this.cursor = novo;
    } else {
      novo.setAnterior(this.cursor!);
      novo.setProximo(this.cursor!.getProximo()!);
      this.cursor!.getProximo()!.setAnterior(novo);
      this.cursor!.setProximo(novo);
    }
    this.quantidade++;
  }

  public removerNo(dado: Musica): void {
    let removido: No | null;
 
    if (this.getQuantidade() === 0) {
        return;
    }
    if (this.getQuantidade() === 1) {
        this.cursor = null;
    } else {
        while(dado.nome != this.cursor?.getProximo()?.getDado()?.nome) {
            this.avancar();
        }
        removido = this.cursor.getProximo()!;
        this.cursor.setProximo(this.cursor.getProximo()!.getProximo()!); 
        removido.setProximo(null);
        removido.setAnterior(null);

    }
   
    this.quantidade--;
  }

  public removerNoPorIndice(index: number): void {
    if (index < 0 || index >= this.getQuantidade()) {
        console.log('Índice fora dos limites da lista');
        return;
    }

    let noAtual = this.cursor;
    for (let i = 0; i < index; i++) {
        noAtual = noAtual!.getProximo();
    }

    // this.removerNo(noAtual!);
  }

  public avancar(): void {
    this.cursor = this.cursor!.getProximo();
  }

  public voltar(): void {
    this.cursor = this.cursor!.getAnterior();
  }

  private getQuantidade(): number {
    return this.quantidade;
  }

}
