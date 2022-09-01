import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/features/client/models/cliente.model';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: Array<Cliente> = [
    {

      id: 1,
      nome: "Hugo Martin da Mata",
      cpf: "094.213.219-01",
      rua: "Rua do Cravo",
      cidade: "Ji-Paraná",
      numero: 381,
      estado: "RO",
      cep: "76901-179"
    },
    {
      id: 2,
      nome: "Anthony Nelson Eduardo Porto",
      cpf: "570.293.839-90",
      rua: "Avenida Genibau",
      numero: 303,
      cidade: "Fortaleza",
      estado: "CE",
      cep: "60534-230"
    },
    {
      id: 3,
      nome: "Tomás Raimundo Miguel Pinto",
      cpf: "754.433.865-73",
      rua: "Rua Safira",

      numero: 903,
      cidade: "Betim",
      estado: "MG",
      cep: "32605-168"
    },
    {
      id: 4,
      nome: "Eduardo Mário Farias",
      cpf: "386.400.992-86",
      cep: "54370-060",
      rua: "Rua Antônio Januário",
      numero: 407,
      cidade: "Jaboatão dos Guararapes",
      estado: "PE"
    }
  ]
  constructor() { }

  getClientes() {
    return this.clientes;
  }

  getById(id: number) {
    return this.clientes.find((cliente) => cliente.id === id);
  }

  create(cliente: Cliente) {
    cliente.id = this.generatedNextId();
    this.clientes.push(cliente);

  }


  generatedNextId() {
    return this.clientes[(this.clientes.length - 1)].id + 1;
  }
}
