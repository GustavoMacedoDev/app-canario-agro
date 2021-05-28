import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Fornecedor } from 'src/app/shared/models/fornecedor.model';
import { FornecedorService } from 'src/app/shared/services/fornecedor.service';

@Component({
  selector: 'app-cadastra-fornecedor',
  templateUrl: './cadastra-fornecedor.component.html',
  styleUrls: ['./cadastra-fornecedor.component.css']
})
export class CadastraFornecedorComponent implements OnInit {

  form: FormGroup;

  fornecedor: Fornecedor;

  constructor(
              private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private router: Router,
              private fornecedorService: FornecedorService
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
  	this.form = this.fb.group({
  		nome: ['', [Validators.required, Validators.minLength(5)]],
  		documento: ['', [Validators.required, Validators.minLength(5)]],
  	});
  }

  cadastrarFornecedor() {
    if (this.form.invalid) {
      return;
    }

    const fornecedor: Fornecedor = this.form.value;
    
    this.fornecedorService.cadastraFornecedor(fornecedor)
      .subscribe(
        data => {
          const msg: string = "Fornecedor cadastrado com sucesso";
          this.snackBar.open(msg, "Sucesso", { duration: 3000 });
          this.router.navigate(['/lista-fornecedor']);
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
