import { Component, OnInit } from '@angular/core';
import { Lote } from 'src/app/shared/models/lote.model';
import { LoteService } from 'src/app/shared/services/lote.service';

@Component({
  selector: 'app-lista-lote',
  templateUrl: './lista-lote.component.html',
  styleUrls: ['./lista-lote.component.css']
})
export class ListaLoteComponent implements OnInit {

  lotes: Lote[];

  constructor(
              private loteService: LoteService
  ) { }

  ngOnInit(): void {
    this.loteService.listaLotes().subscribe(res => this.lotes = res);
  }

}
