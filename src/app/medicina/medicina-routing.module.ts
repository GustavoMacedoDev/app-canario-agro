import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraAplicacaoComponent } from './aplicacao/cadastra-aplicacao/cadastra-aplicacao.component';
import { ListaAplicacaoComponent } from './aplicacao/lista-aplicacao/lista-aplicacao.component';
import { CadastraLoteComponent } from './lote/cadastra-lote/cadastra-lote.component';
import { ListaLoteComponent } from './lote/lista-lote/lista-lote.component';
import { CadastraMedicamentoComponent } from './medicamento/cadastra-medicamento/cadastra-medicamento.component';
import { ListaMedicamentoComponent } from './medicamento/lista-medicamento/lista-medicamento.component';
import { CadastraTipoComponent } from './medicamento/tipo-medicamento/cadastra-tipo/cadastra-tipo.component';
import { ListaTipoComponent } from './medicamento/tipo-medicamento/lista-tipo/lista-tipo.component';

export const MedicinaRoutes: Routes = [
  {
    path: 'lista-tipo',
    component: ListaTipoComponent
  },
  {
    path: 'cadastra-tipo',
    component: CadastraTipoComponent
  },
  {
    path: 'lista-medicamento',
    component: ListaMedicamentoComponent
  },
  {
    path: 'cadastra-medicamento',
    component: CadastraMedicamentoComponent
  },
  {
    path: 'cadastra-aplicacao',
    component: CadastraAplicacaoComponent
  },
  {
    path: 'lista-aplicacao',
    component: ListaAplicacaoComponent
  },
  {
    path: 'lista-lote',
    component: ListaLoteComponent
  },
  {
    path: 'cadastra-lote',
    component: CadastraLoteComponent
  }
	
];

@NgModule({
  imports: [ RouterModule.forChild(MedicinaRoutes) ],
  exports: [ RouterModule ]
})
export class MedicinaRoutingModule {
}