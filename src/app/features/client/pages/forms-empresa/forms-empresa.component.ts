import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RemententesService } from 'src/app/shared/services/remententes.service';

import { Rementente } from '../../models/rementente.model';

@Component({
  templateUrl: './forms-empresa.component.html',
  styleUrls: ['./forms-empresa.component.scss']
})
export class FormsEmpresaComponent implements OnInit {

formRementente = new FormGroup({
  rementente: new FormControl('', [Validators.required]),
  cnpj: new FormControl('', [Validators.required]),
  rua: new FormControl('', [Validators.required]),
  numero: new FormControl(0, [Validators.required]),
  cidade: new FormControl('', [Validators.required]),
  estado: new FormControl('', [Validators.required]),
  cep: new FormControl('', [Validators.required]),
  valorDoFrete: new  FormControl([Validators.required]),

 });
 empresas: Array<Rementente> = this.remententesService.getEmpresas();

 constructor(private remententesService: RemententesService,
  private router: Router) { }


  ngOnInit(): void {
  //  this.formRementente.controls['cep'].setValue('09911070');
  }

  onSubmit() {
    const formValue:any = this.formRementente.value;
    this.remententesService.create(formValue);

    this.router.navigateByUrl('/');

  }
}
