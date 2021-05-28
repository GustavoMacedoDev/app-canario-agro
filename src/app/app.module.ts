import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';

import localePtBr from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminGuard } from './autenticacao/admin/services/admin-guard.service';
import { LoginModule, LoginRoutingModule } from './autenticacao';

import { HomeRoutingModule } from './home/home-routing.module';
import { HomeModule } from './home';
import { AnimalRoutes, AnimalRoutingModule } from './animal/animal-routing.module';
import { AnimalModule } from './animal/animal.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { PessoaRoutingModule } from './pessoa/pessoa-routing.module';
import { CategoriaModule } from './categoria/categoria.module';
import { CategoriaRoutingModule } from './categoria/categoria-routing.module';
import { MedicinaModule } from './medicina/medicina.module';
import { MedicinaRoutingModule } from './medicina/medicina-routing.module';

registerLocaleData(localePtBr);


@NgModule({
  declarations: [ 
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    SharedModule,
    FontAwesomeModule,
    LoginModule,
    LoginRoutingModule,
    HomeModule,
    HomeRoutingModule,
    AnimalModule,
    AnimalRoutingModule,
    PessoaModule,
    PessoaRoutingModule,
    CategoriaModule,
    CategoriaRoutingModule,
    MedicinaModule,
    MedicinaRoutingModule,
    
    AppRoutingModule
  ],
  providers: [{ provide : LOCALE_ID, useValue : 'pt-BR'}, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
