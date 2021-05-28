import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/shared/models/medicamento.model';
import { MedicamentoService } from 'src/app/shared/services/medicamento.service';

@Component({
  selector: 'app-lista-medicamento',
  templateUrl: './lista-medicamento.component.html',
  styleUrls: ['./lista-medicamento.component.css']
})
export class ListaMedicamentoComponent implements OnInit {

  medicamentos: Medicamento[];

  constructor(
            private medicamentoService: MedicamentoService
  ) { }

  ngOnInit(): void {
    this.medicamentoService.listaMedicamentos()
      .subscribe(res => this.medicamentos = res);
  }

}
