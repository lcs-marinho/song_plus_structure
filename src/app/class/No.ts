import { Musica } from "../interface/musica.interface";

export class No {
    private dado?: Musica;
    private anterior?: No;
    private proximo?: No;

    constructor(dado?: Musica, anterior?: No, proximo?: No) {
        this.dado = dado;
        this.anterior = anterior;
        this.proximo = proximo;
    }

    public getDado(): Musica | undefined {
        return this.dado;
    }

    public setDado(dado: Musica): void {
        this.dado = dado;
    }

    public getAnterior(): No | undefined {
        return this.anterior;
    }

    public setAnterior(anterior: No | null): void {
        this.anterior = anterior!;
    }

    public getProximo(): No | undefined {
        return this.proximo;
    }

    public setProximo(proximo: No | null): void {
        this.proximo = proximo!;
    }

}