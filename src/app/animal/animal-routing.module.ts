import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraAnimalComponent } from './animais/cadastra-animal/cadastra-animal.component';
import { ListaAnimalComponent } from './animais/lista-animal/lista-animal.component';
import { CadastraRacaComponent } from './racas/cadastra-raca/cadastra-raca.component';
import { ListaRacaComponent } from './racas/lista-raca/lista-raca.component';

export const AnimalRoutes: Routes = [
	{
		path: 'cadastra-animal',
		component: CadastraAnimalComponent
	},
	{
		path: 'lista-animal',
		component: ListaAnimalComponent
	},
	{
		path: 'cadastra-raca',
		component: CadastraRacaComponent
	},
	{
		path: 'lista-raca',
		component: ListaRacaComponent
	}
];

@NgModule({
  imports: [ RouterModule.forChild(AnimalRoutes) ],
  exports: [ RouterModule ]
})
export class AnimalRoutingModule {
}