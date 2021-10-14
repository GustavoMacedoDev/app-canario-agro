import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/shared/models/animal.model';
import { Peso } from 'src/app/shared/models/peso.model';
import { AnimalService } from 'src/app/shared/services/animal.service';
import { PesoService } from 'src/app/shared/services/peso.service';

@Component({
  selector: 'app-ficha-animal',
  templateUrl: './ficha-animal.component.html',
  styleUrls: ['./ficha-animal.component.css']
})
export class FichaAnimalComponent implements OnInit {

  idAnimal: string;
  animal: Animal;
  pesos: Peso[];

  constructor(
    private animalService: AnimalService,
    private pesoService: PesoService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idAnimal = this.router.snapshot.params['id'];
    this.obterDadosAnimal();
    this.obterPesosAnimal();
  }

  obterDadosAnimal() {
    this.animalService.listaById(this.idAnimal).subscribe(res => this.animal = res);
  }

  obterPesosAnimal() {
    this.pesoService.listaPesosByIdAnimal(this.idAnimal).subscribe(res => this.pesos =res);
  }
}
