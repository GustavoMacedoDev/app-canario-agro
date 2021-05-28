import { Component, OnInit } from '@angular/core';
import { Raca } from 'src/app/shared/models/raca.model';
import { RacaService } from 'src/app/shared/services/raca.service';

@Component({
  selector: 'app-lista-raca',
  templateUrl: './lista-raca.component.html',
  styleUrls: ['./lista-raca.component.css']
})
export class ListaRacaComponent implements OnInit {

  racas: Raca[];

  constructor(
              private racaService: RacaService
  ) { }

  ngOnInit(): void {
    this.racaService.listaRacas().subscribe(res => this.racas = res);
  }

}
