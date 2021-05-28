import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraTipoComponent } from './medicamento/tipo-medicamento/cadastra-tipo/cadastra-tipo.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ListaTipoComponent } from './medicamento/tipo-medicamento/lista-tipo/lista-tipo.component';
import { CadastraMedicamentoComponent } from './medicamento/cadastra-medicamento/cadastra-medicamento.component';
import { ListaMedicamentoComponent } from './medicamento/lista-medicamento/lista-medicamento.component';
import { CadastraAplicacaoComponent } from './aplicacao/cadastra-aplicacao/cadastra-aplicacao.component';
import { ListaAplicacaoComponent } from './aplicacao/lista-aplicacao/lista-aplicacao.component';
import { CadastraLoteComponent } from './lote/cadastra-lote/cadastra-lote.component';
import { ListaLoteComponent } from './lote/lista-lote/lista-lote.component';



@NgModule({
  declarations: [ CadastraTipoComponent, ListaTipoComponent, CadastraMedicamentoComponent, ListaMedicamentoComponent, CadastraAplicacaoComponent, ListaAplicacaoComponent, CadastraLoteComponent, ListaLoteComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class MedicinaModule { }
