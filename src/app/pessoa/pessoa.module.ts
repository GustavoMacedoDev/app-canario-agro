import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraProdutorComponent } from './produtor/cadastra-produtor/cadastra-produtor.component';
import { ListaProdutorComponent } from './produtor/lista-produtor/lista-produtor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ListaFornecedorComponent } from './fornecedor/lista-fornecedor/lista-fornecedor.component';
import { CadastraFornecedorComponent } from './fornecedor/cadastra-fornecedor/cadastra-fornecedor.component';



@NgModule({
  declarations: [
    CadastraProdutorComponent,
    ListaProdutorComponent,
    ListaFornecedorComponent,
    CadastraFornecedorComponent
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
  ]
})
export class PessoaModule { }
