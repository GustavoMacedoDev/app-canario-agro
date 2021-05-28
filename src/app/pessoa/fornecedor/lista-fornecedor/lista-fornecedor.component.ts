import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'src/app/shared/models/fornecedor.model';
import { FornecedorService } from 'src/app/shared/services/fornecedor.service';

@Component({
  selector: 'app-lista-fornecedor',
  templateUrl: './lista-fornecedor.component.html',
  styleUrls: ['./lista-fornecedor.component.css']
})
export class ListaFornecedorComponent implements OnInit {

  fornecedores: Fornecedor[];
  
  constructor(
              private fornecedorService: FornecedorService
  ) { }

  ngOnInit(): void {
    this.fornecedorService.listaFornecedor()
    .subscribe(res => this.fornecedores = res);
  }

}
