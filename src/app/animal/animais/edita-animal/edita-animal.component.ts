import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/shared/models/animal.model';
import { AnimalService } from 'src/app/shared/services/animal.service';

@Component({
  selector: 'app-edita-animal',
  templateUrl: './edita-animal.component.html',
  styleUrls: ['./edita-animal.component.css']
})
export class EditaAnimalComponent implements OnInit {

  animal: Animal;
  idAnimal: string;
  form: FormGroup;

  constructor(
    private animalService: AnimalService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  
  ) { }

  ngOnInit(): void {
    this.buscaIdAnimal();
    this.buscaAnimal();
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required]
    });
  }
  
  buscaIdAnimal() {
    this.idAnimal = this.route.snapshot.params['id'];
  }
  
  buscaAnimal() {
    this.animalService.listaById(this.idAnimal).subscribe(res => this.animal = res);
  }

}
