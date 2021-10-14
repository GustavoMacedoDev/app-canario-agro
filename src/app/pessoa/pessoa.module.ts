import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HomePessoaComponent } from './home-pessoa/home-pessoa.component';
import { CadastraPessoaComponent } from './pessoas/cadastra-pessoa/cadastra-pessoa.component';
import { ListaPessoaComponent } from './pessoas/lista-pessoa/lista-pessoa.component';
import { CadastraPessoaModalComponent } from './pessoas/cadastra-pessoa/cadastra-pessoa-modal/cadastra-pessoa-modal.component';

@NgModule({
  declarations: [
    HomePessoaComponent,
    CadastraPessoaComponent,
    ListaPessoaComponent,
    CadastraPessoaModalComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [
     CadastraPessoaModalComponent
  ]
})
export class PessoaModule { }
