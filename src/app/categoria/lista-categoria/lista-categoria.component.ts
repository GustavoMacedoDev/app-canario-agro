import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/shared/models/categoria.model';
import { CategoriaService } from 'src/app/shared/services/categoria.service';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  categorias: Categoria[];

  constructor(
              private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.categoriaService.listaCategorias()
    .subscribe(res => this.categorias = res);
  }

}
