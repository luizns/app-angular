import { Component, OnInit } from '@angular/core';
import { RemententesService } from 'src/app/shared/services/remententes.service';

import { Rementente } from '../../models/rementente.model';


@Component({
  selector: 'app-tabela-remententes',
  templateUrl: './tabela-remententes.component.html',
  styleUrls: ['./tabela-remententes.component.scss']
})
export class TabelaRemententesComponent implements OnInit {

  empresas: Array<Rementente> = this.remententesService.getEmpresas();

  constructor(private remententesService: RemententesService) { }

  ngOnInit(): void {
  }

}
