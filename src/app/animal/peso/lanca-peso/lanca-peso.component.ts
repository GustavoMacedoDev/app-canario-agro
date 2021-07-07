import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/shared/models/animal.model';
import { Peso } from 'src/app/shared/models/peso.model';
import { AnimalService } from 'src/app/shared/services/animal.service';
import { PesoService } from 'src/app/shared/services/peso.service';

@Component({
  selector: 'app-lanca-peso',
  templateUrl: './lanca-peso.component.html',
  styleUrls: ['./lanca-peso.component.css']
})
export class LancaPesoComponent implements OnInit {

  peso: Peso;
  idAnimal: string;
  animal: Animal;
  form: FormGroup;

  constructor(
    private pesoService: PesoService,
    private route: ActivatedRoute,
    private animalService: AnimalService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.idAnimal = this.route.snapshot.params['id'];
    this.obterDadosAnimal();
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      peso:['', Validators.required],
      dataRegistro:['', Validators.required]
    });
  }

  obterDadosAnimal() {
    this.animalService.listaById(this.idAnimal).subscribe(res => this.animal = res);
  }
  
  lancaPeso() {
    if(this.form.invalid) {
      return;
    }

    const peso = this.form.value;
    peso.animal = this.animal;

    this.pesoService.cadastrarPeso(peso)
      .subscribe(
        data => {
          const msg = "Peso lançado com sucesso";
          this.snackBar.open(msg, "Sucesso", { duration: 3000 });
          this.router.navigate(['/lista-animal']);
        },
        err => {
          let msg: string = "Tente novamente em instantes.";
          if (err.status == 400) {
            msg = err.error.errors.join(' ');
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
        }
}
