import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePessoaComponent } from './home-pessoa/home-pessoa.component';
import { CadastraPessoaComponent } from './pessoas/cadastra-pessoa/cadastra-pessoa.component';
import { ListaPessoaComponent } from './pessoas/lista-pessoa/lista-pessoa.component';

export const PessoaRoutes: Routes = [
 
  {
    path: 'home-pessoa',
    component: HomePessoaComponent
  },
  {
    path: 'cadastra-pessoa',
    component: CadastraPessoaComponent
  },
  {
    path: 'lista-pessoa',
    component: ListaPessoaComponent
  }
	
];

@NgModule({
  imports: [ RouterModule.forChild(PessoaRoutes) ],
  exports: [ RouterModule ]
})
export class PessoaRoutingModule {
}