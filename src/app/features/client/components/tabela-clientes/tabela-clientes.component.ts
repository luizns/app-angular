import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/shared/services/clientes.service';

import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html',
  styleUrls: ['./tabela-clientes.component.scss']
})
export class TabelaClientesComponent implements OnInit {


  clientes: Array<Cliente> = this.clientesService.getClientes();

  constructor(private clientesService: ClientesService) { }


  ngOnInit(): void {
  }

}
