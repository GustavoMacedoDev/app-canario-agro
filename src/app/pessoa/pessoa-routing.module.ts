import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraFornecedorComponent } from './fornecedor/cadastra-fornecedor/cadastra-fornecedor.component';
import { ListaFornecedorComponent } from './fornecedor/lista-fornecedor/lista-fornecedor.component';
import { CadastraProdutorComponent } from './produtor/cadastra-produtor/cadastra-produtor.component';
import { ListaProdutorComponent } from './produtor/lista-produtor/lista-produtor.component';

export const PessoaRoutes: Routes = [
  {
    path: 'cadastra-produtor',
    component: CadastraProdutorComponent
  },
  {
    path: 'lista-produtor',
    component: ListaProdutorComponent
  },
  {
    path: 'lista-fornecedor',
    component: ListaFornecedorComponent
  },
  {
    path: 'cadastra-fornecedor',
    component: CadastraFornecedorComponent
  }
	
];

@NgModule({
  imports: [ RouterModule.forChild(PessoaRoutes) ],
  exports: [ RouterModule ]
})
export class PessoaRoutingModule {
}