import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Produtor } from 'src/app/shared/models/produtor.model';
import { ProdutorService } from 'src/app/shared/services/produtor.service';

@Component({
  selector: 'app-cadastra-produtor',
  templateUrl: './cadastra-produtor.component.html',
  styleUrls: ['./cadastra-produtor.component.css']
})
export class CadastraProdutorComponent implements OnInit {

  form: FormGroup;

  produtor: Produtor;

  constructor(
              private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private router: Router,
              private produtorService: ProdutorService
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
  	this.form = this.fb.group({
  		nome: ['', [Validators.required, Validators.minLength(5)]],
  		razaoSocial: ['', [Validators.required, Validators.minLength(5)]],
  	});
  }

  cadastrarProdutor() {
    if (this.form.invalid) {
      return;
    }

    const produtor: Produtor = this.form.value;
    
    this.produtorService.cadastraProdutor(produtor)
      .subscribe(
        data => {
          const msg: string = "Produtor cadastrado com sucesso";
          this.snackBar.open(msg, "Sucesso", { duration: 3000 });
          this.router.navigate(['/lista-produtor']);
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
