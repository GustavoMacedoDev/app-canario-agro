import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraVendaComponent } from './vendas/cadastra-venda/cadastra-venda.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FechaVendaComponent } from './vendas/fecha-venda/fecha-venda.component';
import { ItemsVendaComponent } from './vendas/fecha-venda/items-venda/items-venda.component';
import { RevisaVendaComponent } from './vendas/fecha-venda/revisa-venda/revisa-venda.component';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaVendasComponent } from './vendas/lista-vendas/lista-vendas.component';
import { ListaVendaComponent } from './vendas/lista-vendas/lista-venda/lista-venda.component';
import { HomeNegociosComponent } from './home-negocios/home-negocios.component';
import { ListaArrobaComponent } from './valores/arroba/lista-arroba/lista-arroba.component';
import { CadastraArrobaComponent } from './valores/arroba/cadastra-arroba/cadastra-arroba.component';
import { EditaArrobaComponent } from './valores/arroba/edita-arroba/edita-arroba.component';



@NgModule({
  declarations: [
    CadastraVendaComponent,
    ListaVendasComponent,
    FechaVendaComponent,
    ItemsVendaComponent,
    RevisaVendaComponent,
    ListaVendaComponent,
    HomeNegociosComponent,
    ListaArrobaComponent,
    CadastraArrobaComponent,
    EditaArrobaComponent
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
    MatSelectModule
  ]
})
export class NegociosModule { }
