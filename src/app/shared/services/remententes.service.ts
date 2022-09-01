import { Injectable } from '@angular/core';
import { Rementente } from 'src/app/features/client/models/rementente.model';


@Injectable({
  providedIn: 'root'
})
export class RemententesService {

  remententes: Array<Rementente> = [
    {
      id: 1,
      rementente: "L&I Joalheria Ltda",
      cnpj: "89.707.370/0001-77",
      rua: "Rua do Cravo",
      numero: 381,
      cidade: "Rua José Benedicto",
      estado: "SP",
      cep: "12294-440",
      valorDoFrete: 87.05
    },
    {
      id: 2,
      rementente: "Aurora e Breno Contábil ME",
      cnpj: "29.149.113/0001-35",
      rua: "Rua dos Tatuís",
      numero: 921,
      cidade: "Niterói",
      estado: "RJ",
      cep: "24358-414",
      valorDoFrete: 125.80
    },
    {
      id: 3,
      rementente: "Bianca e Liz Buffet ME",
      cnpj: "89.707.370/0001-77",
      rua: "Rua do Cravo",
      numero: 381,
      cidade: "Rua José Benedicto",
      estado: "SP",
      cep: "12294-440",
      valorDoFrete: 45.00
    }
  ]
  constructor() { }

  getEmpresas() {
    return this.remententes;
  }

  getById(id: number) {
    return this.remententes.find((rementente) => rementente.id === id);
  }


  create(rementente: Rementente) {
    rementente.id = this.generatedNextId();
    this.remententes.push(rementente);

  }

  generatedNextId() {
    return this.remententes[(this.remententes.length - 1)].id + 1;
  }
}
