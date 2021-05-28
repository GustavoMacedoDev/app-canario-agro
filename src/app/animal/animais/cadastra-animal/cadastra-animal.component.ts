import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Animal } from 'src/app/shared/models/animal.model';
import { Categoria } from 'src/app/shared/models/categoria.model';
import { Fornecedor } from 'src/app/shared/models/fornecedor.model';
import { Produtor } from 'src/app/shared/models/produtor.model';
import { Raca } from 'src/app/shared/models/raca.model';
import { AnimalService } from 'src/app/shared/services/animal.service';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { FornecedorService } from 'src/app/shared/services/fornecedor.service';
import { ProdutorService } from 'src/app/shared/services/produtor.service';
import { RacaService } from 'src/app/shared/services/raca.service';

@Component({
  selector: 'app-cadastra-animal',
  templateUrl: './cadastra-animal.component.html',
  styleUrls: ['./cadastra-animal.component.css']
})
export class CadastraAnimalComponent implements OnInit {

  form: FormGroup;
  produtores: Produtor[];
  fornecedores: Fornecedor[];
  racas: Raca[];
  categorias: Categoria[];
  
  constructor(
              private fb: FormBuilder,
              private animalService: AnimalService,
              private produtorService: ProdutorService,
              private fornecedorService: FornecedorService,
              private racaService: RacaService,
              private categoriaService: CategoriaService,
              private snackBar: MatSnackBar,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.gerarForm();
    this.produtorService.listaProdutores().subscribe(res => this.produtores = res);
    this.fornecedorService.listaFornecedor().subscribe(res => this.fornecedores = res);
    this.racaService.listaRacas().subscribe(res => this.racas = res);
    this.categoriaService.listaCategorias().subscribe(res => this.categorias = res);
  }

  gerarForm() {
    this.form = this.fb.group({
  		nome: ['', ],
  		dataNascimento: ['', [Validators.required]],
      pesoNascimento:['', [Validators.required]],
      identificacao:['', [Validators.required]],
      sexo:['', [Validators.required]],
      produtor: this.fb.control('', [Validators.required]),
      fornecedor: this.fb.control('', [Validators.required]),
      raca: this.fb.control('', [Validators.required]),
      categoria: this.fb.control('', [Validators.required])
      
  	});
  }

  cadastrarAnimal() {
  	if (this.form.invalid) {
      return;
    }

    const animal: Animal = this.form.value;
    
    this.animalService.cadastrar(animal)
      .subscribe(
        data => {
          const msg: string = "Animal cadastrado com sucesso";
          this.snackBar.open(msg, "Sucesso", { duration: 5000 });
          this.router.navigate(['/home']);
        },
        err => {
          let msg: string = "Tente novamente em instantes.";
          if (err.status == 400) {
            msg = err.error.errors.join(' ');
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  	return false;
  }

}