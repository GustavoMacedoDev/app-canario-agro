import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNegociosComponent } from './home-negocios/home-negocios.component';
import { CadastraVendaComponent } from './vendas/cadastra-venda/cadastra-venda.component';
import { FechaVendaComponent } from './vendas/fecha-venda/fecha-venda.component';
import { ListaVendaComponent } from './vendas/lista-vendas/lista-venda/lista-venda.component';
import { ListaVendasComponent } from './vendas/lista-vendas/lista-vendas.component';


export const NegociosRoutes: Routes = [
	{
		path: 'home-negocios',
		component: HomeNegociosComponent
	},
	{
		path: 'lista-vendas',
		component: ListaVendasComponent
	},
	{
		path: 'cadastra-venda',
		component: CadastraVendaComponent
	},
	{
		path: 'fecha-venda',
		component: FechaVendaComponent
	},
	{
		path: 'venda/ver/:id',
		component: ListaVendaComponent
	}
];

@NgModule({
  imports: [ RouterModule.forChild(NegociosRoutes) ],
  exports: [ RouterModule ]
})
export class NegociosRoutingModule {
}