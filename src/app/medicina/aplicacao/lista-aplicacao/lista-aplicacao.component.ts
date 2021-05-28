import { Component, OnInit } from '@angular/core';
import { Aplicacao } from 'src/app/shared/models/aplicacao.model';
import { AplicacaoService } from 'src/app/shared/services/aplicacao.service';

@Component({
  selector: 'app-lista-aplicacao',
  templateUrl: './lista-aplicacao.component.html',
  styleUrls: ['./lista-aplicacao.component.css']
})
export class ListaAplicacaoComponent implements OnInit {

  aplicacoes: Aplicacao[];
  
  constructor(
              private aplicacaoService: AplicacaoService
  ) { }

  ngOnInit(): void {
    this.aplicacaoService.listaTodos().subscribe(res => this.aplicacoes = res);
  }

}
