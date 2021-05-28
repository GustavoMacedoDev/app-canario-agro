import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/shared/models/animal.model';
import { AnimalService } from 'src/app/shared/services/animal.service';

@Component({
  selector: 'app-lista-animal',
  templateUrl: './lista-animal.component.html',
  styleUrls: ['./lista-animal.component.css']
})
export class ListaAnimalComponent implements OnInit {

  animais: Animal[];

  constructor(
            private animalService: AnimalService
  ) { }

  ngOnInit(): void {
    this.animalService.listaTodos()
    .subscribe(res => this.animais = res);
  }

}
