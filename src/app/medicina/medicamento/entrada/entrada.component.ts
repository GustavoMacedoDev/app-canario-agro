import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Lote } from 'src/app/shared/models/lote.model';
import { Medicamento } from 'src/app/shared/models/medicamento.model';
import { Movimentacao } from 'src/app/shared/models/movimentacao.model';
import { LoteService } from 'src/app/shared/services/lote.service';
import { MedicamentoService } from 'src/app/shared/services/medicamento.service';
import { MovimentacaoService } from 'src/app/shared/services/movimentacao.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  form: FormGroup;
  medicamentos: Medicamento[];
  lotes: Lote[];

  constructor(
              private movimentacaoService: MovimentacaoService,
              private medicamentoService: MedicamentoService,
              private loteService: LoteService,
              private router: Router,
              private snackBar: MatSnackBar,
              private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.gerarForm();
    this.medicamentoService.listaMedicamentos().subscribe(res => this.medicamentos = res);
    this.loteService.listaLotes().subscribe(res => this.lotes = res);
  }

  gerarForm() {
    this.form = this.fb.group({
      dataMovimentacao: ['', Validators.required],
      tipo:[Validators.required],
      dosagem:['', Validators.required],
      medicamento:[Validators.required],
      lote:[Validators.required]
    });
  }

  cadastrarMovimentacao() {

    if(this.form.invalid) {
      return;
    }

    const movimentacao: Movimentacao = this.form.value;

    this.movimentacaoService.cadastrar(movimentacao)
      .subscribe(
        data => {
          const msg: string = "Entrada feita com sucesso";
          this.snackBar.open(msg, "Sucesso", {duration: 3000, direction: 'ltr'});
          this.router.navigate(['/home-medicina']);
        },
        err => {
          let msg: string = "Tente novamente em instantes";
          if(err.status == 400) {
            msg = err.error.join('');
          }
          this.snackBar.open(msg, "Erro", {duration: 3000});
        }
    );

    return false;

  }

}
