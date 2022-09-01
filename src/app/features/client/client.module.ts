import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { TabelaClientesComponent } from './components/tabela-clientes/tabela-clientes.component';
import { TabelaRemententesComponent } from './components/tabela-remententes/tabela-remententes.component';
import { ClientePageComponent } from './pages/cliente-page/cliente-page.component';
import { FormsClienteComponent } from './pages/forms-cliente/forms-cliente.component';
import { FormsEmpresaComponent } from './pages/forms-empresa/forms-empresa.component';



@NgModule({
  declarations: [
    TabelaClientesComponent,
    TabelaRemententesComponent,
    FormsClienteComponent,
    FormsEmpresaComponent,
    ClientePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    TabelaClientesComponent,
    TabelaRemententesComponent
  ]
})
export class ClientModule { }
