import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientePageComponent } from './features/client/pages/cliente-page/cliente-page.component';
import { FormsClienteComponent } from './features/client/pages/forms-cliente/forms-cliente.component';
import { FormsEmpresaComponent } from './features/client/pages/forms-empresa/forms-empresa.component';



const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ClientePageComponent },
  { path: 'cliente', component: FormsClienteComponent },
  { path: 'empresa', component: FormsEmpresaComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

