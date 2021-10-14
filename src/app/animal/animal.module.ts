import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraAnimalComponent } from './animais/cadastra-animal/cadastra-animal.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastraRacaComponent } from './racas/cadastra-raca/cadastra-raca.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ListaRacaComponent } from './racas/lista-raca/lista-raca.component';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { ListaAnimalComponent } from './animais/lista-animal/lista-animal.component';
import { HomeAnimalComponent } from './home-animal/home-animal.component';
import { FichaAnimalComponent } from './animais/lista-animal/ficha-animal/ficha-animal.component';
import { LancaPesoComponent } from './peso/lanca-peso/lanca-peso.component';
import { CadastraPessoaComponent } from '../pessoa/pessoas/cadastra-pessoa/cadastra-pessoa.component';
import { PessoaModule } from '../pessoa/pessoa.module';
import { CadastraRacaModalComponent } from './racas/cadastra-raca/cadastra-raca-modal/cadastra-raca-modal.component';
import { CategoriaModule } from '../categoria/categoria.module';
import { EditaAnimalComponent } from './animais/edita-animal/edita-animal.component';


@NgModule({
  declarations: [
    CadastraAnimalComponent,
    CadastraRacaComponent,
    ListaRacaComponent,
    ListaAnimalComponent,
    HomeAnimalComponent,
    FichaAnimalComponent,
    LancaPesoComponent,
    CadastraRacaModalComponent,
    EditaAnimalComponent
  ],
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
    MatSelectModule,
    PessoaModule,
    CategoriaModule
  ]
})
export class AnimalModule { }
