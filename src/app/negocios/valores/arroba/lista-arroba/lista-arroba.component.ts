import { Component, OnInit } from '@angular/core';
import { Arroba } from 'src/app/shared/models/arroba.model';
import { ArrobaService } from 'src/app/shared/services/arroba.service';

@Component({
  selector: 'app-lista-arroba',
  templateUrl: './lista-arroba.component.html',
  styleUrls: ['./lista-arroba.component.css']
})
export class ListaArrobaComponent implements OnInit {

  arrobas: Arroba[];
  
  constructor(
            private arrobaService: ArrobaService
  ) { }

  ngOnInit(): void {
    this.arrobaService.listaArroba(1).subscribe(res => this.arrobas = res);
  }

}
