import { Component, OnInit } from '@angular/core';
import { Venda } from 'src/app/shared/models/venda.model';
import { VendaService } from 'src/app/shared/services/venda.service';

@Component({
  selector: 'app-lista-vendas',
  templateUrl: './lista-vendas.component.html',
  styleUrls: ['./lista-vendas.component.css']
})
export class ListaVendasComponent implements OnInit {

  vendas: Venda[];

  constructor(
    private vendaService: VendaService
  ) { }

  ngOnInit(): void {
    this.vendaService.listaVendas().subscribe(res => this.vendas = res);
  }

}
