import { Component, OnInit } from '@angular/core';
import { Aplicacao } from 'src/app/shared/models/aplicacao.model';
import { Lote } from 'src/app/shared/models/lote.model';
import { Movimentacao } from 'src/app/shared/models/movimentacao.model';
import { AplicacaoService } from 'src/app/shared/services/aplicacao.service';
import { LoteService } from 'src/app/shared/services/lote.service';
import { MovimentacaoService } from 'src/app/shared/services/movimentacao.service';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})
export class MovimentacaoComponent implements OnInit {

  movimentacoes: Movimentacao[];
  aplicacoes: Aplicacao[];
  lotes: Lote[];

  constructor(
            public movimentacaoService: MovimentacaoService,
            public aplicacaoService: AplicacaoService,
            public loteService: LoteService
  ) { }

  ngOnInit(): void {
    this.movimentacaoService.listaTodos().subscribe(res => this.movimentacoes = res);
    this.aplicacaoService.listaTodos().subscribe(res => this.aplicacoes = res);
    this.loteService.listaLotes().subscribe(res => this.lotes = res);
  }

}
