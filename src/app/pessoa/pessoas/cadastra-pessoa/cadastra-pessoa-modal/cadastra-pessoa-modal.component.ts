import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaService } from 'src/app/shared/services/pessoa.service';

@Component({
  selector: 'app-cadastra-pessoa-modal',
  templateUrl: './cadastra-pessoa-modal.component.html',
  styleUrls: ['./cadastra-pessoa-modal.component.css']
})
export class CadastraPessoaModalComponent implements OnInit {

  form: FormGroup;

  constructor(
            private fb: FormBuilder,
            private pessoaService: PessoaService,
            private snackBar: MatSnackBar,
            private router: Router
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      nome:['', Validators.required],
      documento:['', Validators.required]
    });
  }

  cadastraPessoa() {
    if(this.form.invalid) {
      return;
    }

    const pessoa : Pessoa = this.form.value;

    this.pessoaService.cadastrarPessoa(pessoa)
    .subscribe(
      data => {
        const msg : string = "Pessoa cadastrada com sucesso!";
        this.snackBar.open(msg, "Sucesso", {duration : 3000});
      },
      err => {
        let msg : string = "Erro ao tentar cadastrar";
        if(err.status == 400) {
          msg = err.error.errors.join('');
        }

        this.snackBar.open(msg, "Erro", {duration : 3000});
      }  
    );

    return false;

  }
}
