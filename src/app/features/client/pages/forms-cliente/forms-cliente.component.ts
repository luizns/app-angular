import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/shared/services/clientes.service';

@Component({
  templateUrl: './forms-cliente.component.html',
  styleUrls: ['./forms-cliente.component.scss']
})
export class FormsClienteComponent implements OnInit {

  formCliente = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    rua: new FormControl('', [Validators.required]),
    numero: new FormControl(0, [Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required]),
  });


  constructor(
    private clientesService: ClientesService,
    private router: Router) { }

  ngOnInit(): void {

    //this.formCliente.controls['cep'].setValue('09911070');
  }

  onSubmit() {
    const formValue: any = this.formCliente.value;
    this.clientesService.create(formValue);
    this.router.navigateByUrl('/');
    /*
        this.productsService.create(formValue);
    this.productsService.create(formValue);
        this.router.navigateByUrl('/sell'); */

  }
}
