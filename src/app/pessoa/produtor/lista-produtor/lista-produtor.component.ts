import { Component, OnInit } from '@angular/core';
import { Produtor } from 'src/app/shared/models/produtor.model';
import { ProdutorService } from 'src/app/shared/services/produtor.service';

@Component({
  selector: 'app-lista-produtor',
  templateUrl: './lista-produtor.component.html',
  styleUrls: ['./lista-produtor.component.css']
})
export class ListaProdutorComponent implements OnInit {

  produtores: Produtor[];

  constructor(
              private produtorService: ProdutorService
  ) { }

  ngOnInit(): void {
    this.produtorService.listaProdutores()
    .subscribe(res => this.produtores = res);
  }

}
