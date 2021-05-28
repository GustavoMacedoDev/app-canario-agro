import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Medicamento } from 'src/app/shared/models/medicamento.model';
import { TipoMedicamento } from 'src/app/shared/models/tipo-medicamento.model';
import { MedicamentoService } from 'src/app/shared/services/medicamento.service';
import { TipoMedicamentoService } from 'src/app/shared/services/tipo-medicamento.service';

@Component({
  selector: 'app-cadastra-medicamento',
  templateUrl: './cadastra-medicamento.component.html',
  styleUrls: ['./cadastra-medicamento.component.css']
})
export class CadastraMedicamentoComponent implements OnInit {

  form: FormGroup;
  tipos: TipoMedicamento[];

  constructor(
              private tipoService: TipoMedicamentoService,
              private medicamentoService: MedicamentoService,
              private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.gerarForm();
    this.tipoService.listaTipos().subscribe(res => this.tipos = res);
  }

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      tipo: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  cadastrarMedicamento() {
    if (this.form.invalid) {
      return;
    }

    const medicamento: Medicamento = this.form.value;
    
    this.medicamentoService.cadastrarMedicamento(medicamento)
      .subscribe(
        data => {
          const msg: string = "Medicamento cadastrado com sucesso";
          this.snackBar.open(msg, "Sucesso", { duration: 3000 });
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
