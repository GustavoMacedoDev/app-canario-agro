import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/shared/models/categoria.model';
import { CategoriaService } from 'src/app/shared/services/categoria.service';

@Component({
  selector: 'app-cadastra-categoria',
  templateUrl: './cadastra-categoria.component.html',
  styleUrls: ['./cadastra-categoria.component.css']
})
export class CadastraCategoriaComponent implements OnInit {

  form: FormGroup;
  categoria: Categoria;

  constructor(
              private fb: FormBuilder,
              private router: Router,
              private snackBar: MatSnackBar,
              private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  cadastraCategoria() {
    if(this.form.invalid) {
      return;
    }

    const categoria: Categoria = this.form.value;

    this.categoriaService.cadastrarCategoria(categoria)
    .subscribe(
      data => {
        const msg : string = "Categoria cadastrada com sucesso";
        this.snackBar.open(msg, "Sucesso", { duration: 3000});
        this.router.navigate(['/lista-categoria']);

      },
      err => {
        let msg : string = "Tente novamente em instantes.";
        if (err.status == 400) {
          msg = err.error.errors.join(' ');
        }
        this.snackBar.open(msg, "Erro", { duration: 5000 });
      }
    );
  return false;
  }

}
