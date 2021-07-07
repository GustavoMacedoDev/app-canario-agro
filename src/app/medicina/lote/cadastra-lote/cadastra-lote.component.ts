import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Lote } from 'src/app/shared/models/lote.model';
import { Medicamento } from 'src/app/shared/models/medicamento.model';
import { LoteService } from 'src/app/shared/services/lote.service';
import { MedicamentoService } from 'src/app/shared/services/medicamento.service';

@Component({
  selector: 'app-cadastra-lote',
  templateUrl: './cadastra-lote.component.html',
  styleUrls: ['./cadastra-lote.component.css']
})
export class CadastraLoteComponent implements OnInit {

  form: FormGroup;
  medicamentos: Medicamento[];

  constructor(
              private loteService: LoteService,
              private snackBar: MatSnackBar,
              private router: Router,
              private fb: FormBuilder,
              private medicamentoService: MedicamentoService
  ) { }

  ngOnInit(): void {
    this.gerarForm();
    this.medicamentoService.listaMedicamentos().subscribe(res => this.medicamentos = res);
  }

  gerarForm() {
    this.form = this.fb.group({
      lote:['', Validators.required],
      dataFabricacao:['', Validators.required],
      dataValidade:['', Validators.required],
      medicamento:['', Validators.required]
    });
  }

  cadastrarLote() {
    if(this.form.invalid) {
      return;
    }

    const lote: Lote = this.form.value;

    this.loteService.cadastrarLote(lote).subscribe(
      data => {
        const msg: string = "Lote cadastrado com sucesso";
        this.snackBar.open(msg, 'Sucesso', {duration : 3000});
        this.router.navigate(['/lista-lote']);
      },
      err => {
        let msg: string = "Tente novamente em instantes";
        if(err.status == 400) {
          msg = err.error.errors.join('');          
        }
        this.snackBar.open(msg, "Erro", { duration : 3000});
      }
    );
    return false;
  }
}
