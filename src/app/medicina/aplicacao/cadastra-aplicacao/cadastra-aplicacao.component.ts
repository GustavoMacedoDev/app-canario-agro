import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Animal } from 'src/app/shared/models/animal.model';
import { Aplicacao } from 'src/app/shared/models/aplicacao.model';
import { Medicamento } from 'src/app/shared/models/medicamento.model';
import { AnimalService } from 'src/app/shared/services/animal.service';
import { AplicacaoService } from 'src/app/shared/services/aplicacao.service';
import { MedicamentoService } from 'src/app/shared/services/medicamento.service';

@Component({
  selector: 'app-cadastra-aplicacao',
  templateUrl: './cadastra-aplicacao.component.html',
  styleUrls: ['./cadastra-aplicacao.component.css']
})
export class CadastraAplicacaoComponent implements OnInit {

  form: FormGroup;
  animais: Animal[];
  medicamentos: Medicamento[];

  constructor(
              private animalService: AnimalService,
              private medicamentoService: MedicamentoService,
              private aplicacaoService: AplicacaoService,
              private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.gerarForm();
    this.animalService.listaTodos().subscribe(res => this.animais = res);
    this.medicamentoService.listaMedicamentos().subscribe(res => this.medicamentos = res);
  }

  gerarForm() {
    this.form = this.fb.group({
      dataAplicacao:['', Validators.required],
      animal:[Validators.required],
      medicamento:[Validators.required]
    });
  }

  cadastrarAplicacao(){
    if(this.form.invalid) {
      return ;
    }

    const aplicacao: Aplicacao = this.form.value;

    this.aplicacaoService.cadastrar(aplicacao)
      .subscribe(
        data => {
          const msg: string = "Aplicacao cadastrada com sucesso";
          this.snackBar.open(msg, "Sucesso", {duration : 3000});
          this.router.navigate(['/home']);
        },
        err => {
          let msg: string = "Tente novamente em instantes";
          if (err.status == 400) {
            msg = err.error.errors.join(' ');
          }
          this.snackBar.open(msg, "Erro", {duration : 3000});
        }
      );

    return false;
  }

}
