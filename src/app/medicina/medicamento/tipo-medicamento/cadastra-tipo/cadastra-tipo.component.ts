import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TipoMedicamento } from 'src/app/shared/models/tipo-medicamento.model';
import { RacaService } from 'src/app/shared/services/raca.service';
import { TipoMedicamentoService } from 'src/app/shared/services/tipo-medicamento.service';

@Component({
  selector: 'app-cadastra-tipo',
  templateUrl: './cadastra-tipo.component.html',
  styleUrls: ['./cadastra-tipo.component.css']
})
export class CadastraTipoComponent implements OnInit {

  form: FormGroup;


  constructor(
              private fb: FormBuilder, 
              private snackBar: MatSnackBar,
              private router: Router,
              private tipoService: TipoMedicamentoService
              
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      tipo: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  cadastrarTipoMedicamento() {
    if (this.form.invalid) {
      return;
    }

    const tipo: TipoMedicamento = this.form.value;
    
    this.tipoService.cadastraTipoMedicamento(tipo)
      .subscribe(
        data => {
          const msg: string = "Tipo cadastrado com sucesso";
          this.snackBar.open(msg, "Sucesso", { duration: 3000 });
          this.router.navigate(['/lista-tipo']);
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
