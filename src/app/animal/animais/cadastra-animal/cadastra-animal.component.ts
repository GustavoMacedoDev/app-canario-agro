import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Animal } from 'src/app/shared/models/animal.model';
import { Categoria } from 'src/app/shared/models/categoria.model';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { Raca } from 'src/app/shared/models/raca.model';
import { AnimalService } from 'src/app/shared/services/animal.service';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { PessoaService } from 'src/app/shared/services/pessoa.service';
import { RacaService } from 'src/app/shared/services/raca.service';

@Component({
  selector: 'app-cadastra-animal',
  templateUrl: './cadastra-animal.component.html',
  styleUrls: ['./cadastra-animal.component.css']
})
export class CadastraAnimalComponent implements OnInit {

  form: FormGroup;
  produtores: Pessoa[];
  fornecedores: Pessoa[];
  racas: Raca[];
  categorias: Categoria[];
  femeas: Animal[];
  machos: Animal[];
  
  constructor(
              private fb: FormBuilder,
              private animalService: AnimalService,
              private pessoaService: PessoaService,
              private racaService: RacaService,
              private categoriaService: CategoriaService,
              private snackBar: MatSnackBar,
              private router: Router,
              private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.gerarForm();
    this.buscaProdutores();
    this.buscaRacas();
    this.buscaCategorias();
    this.buscaAnimais();
  }
  
  buscaAnimais() {
    this.animalService.listaBySexo('MACHO').subscribe(res => this.machos = res);
    this.animalService.listaBySexo('FEMEA').subscribe(res => this.femeas = res);
  }

  buscaProdutores() {
    this.pessoaService.listaPessoas().subscribe(res => this.produtores = res);
    this.pessoaService.listaPessoas().subscribe(res => this.fornecedores = res);
  }
  
  buscaRacas() {
    this.racaService.listaRacas().subscribe(res => this.racas = res);
  }

  buscaCategorias() {
    this.categoriaService.listaCategorias().subscribe(res => this.categorias = res);
  }

  gerarForm() {
    this.form = this.fb.group({
  		nome: ['', Validators.required],
  		dataEntrada: ['', [Validators.required]],
  		dataNascimento: ['', [Validators.required]],
      pesoEntrada:['', [Validators.required]],
      identificacao:['', [Validators.required]],
      sexo:['', [Validators.required]],
      mae:['', ],
      pai:['', ],
      status:['', [Validators.required]],
      produtor: this.fb.control('', [Validators.required]),
      fornecedor: this.fb.control('', [Validators.required]),
      raca: this.fb.control('', [Validators.required]),
      categoria: this.fb.control('', [Validators.required])
      
  	});
  }

  openPessoa(contentPessoa) {
    this.modalService.open(contentPessoa);
  }

  openRaca(contentRaca) {
    this.modalService.open(contentRaca);
  }

  openCategoria(contentCategoria) {
    this.modalService.open(contentCategoria);
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
          this.snackBar.open(msg, "Sucesso", { duration: 3000 });
          this.router.navigate(['/lista-animal']);
        },
        err => {
          let msg: string = "Tente novamente em instantes.";
          if (err.status == 400) {
            msg = err.error.errors.join(' ');
          }
          if (err.status == 400) {
            msg = err.error.errors.join(' ');
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  	return false;
  }

}
