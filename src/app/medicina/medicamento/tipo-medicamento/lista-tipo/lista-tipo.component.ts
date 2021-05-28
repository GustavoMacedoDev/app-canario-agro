import { Component, OnInit } from '@angular/core';
import { TipoMedicamentoService } from 'src/app/shared/services/tipo-medicamento.service';
import { TipoMedicamento } from '../../../../shared/models/tipo-medicamento.model';

@Component({
  selector: 'app-lista-tipo',
  templateUrl: './lista-tipo.component.html',
  styleUrls: ['./lista-tipo.component.css']
})
export class ListaTipoComponent implements OnInit {

  tipos: TipoMedicamento[];

  constructor(
              private tipoService: TipoMedicamentoService
  ) { }

  ngOnInit(): void {
    this.tipoService.listaTipos().subscribe(res => this.tipos = res);
    
  }

}
