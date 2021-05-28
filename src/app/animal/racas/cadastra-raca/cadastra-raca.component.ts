import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Raca } from 'src/app/shared/models/raca.model';
import { RacaService } from 'src/app/shared/services/raca.service';

@Component({
  selector: 'app-cadastra-raca',
  templateUrl: './cadastra-raca.component.html',
  styleUrls: ['./cadastra-raca.component.css']
})
export class CadastraRacaComponent implements OnInit {

  form: FormGroup;


  constructor(
              private fb: FormBuilder, 
              private snackBar: MatSnackBar,
              private router: Router,
              private racaService: RacaService
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

    gerarForm() {
      this.form = this.fb.group({
        nome: ['', [Validators.required, Validators.minLength(3)]],
      });
    }

  cadastrarRaca() {
    if (this.form.invalid) {
      return;
    }

    const raca: Raca = this.form.value;
    
    this.racaService.cadastraRaca(raca)
      .subscribe(
        data => {
          const msg: string = "Raça cadastrada com sucesso";
          this.snackBar.open(msg, "Sucesso", { duration: 5000 });
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