import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraAnimalComponent } from './animais/cadastra-animal/cadastra-animal.component';
import { FichaAnimalComponent } from './animais/lista-animal/ficha-animal/ficha-animal.component';
import { ListaAnimalComponent } from './animais/lista-animal/lista-animal.component';
import { HomeAnimalComponent } from './home-animal/home-animal.component';
import { LancaPesoComponent } from './peso/lanca-peso/lanca-peso.component';
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
	},
	{
		path: 'home-animal',
		component: HomeAnimalComponent
	},
	{
		path: 'ficha-animal/:id',
		component: FichaAnimalComponent
	},
	{
		path: 'lanca-peso/:id',
		component: LancaPesoComponent
	}
];

@NgModule({
  imports: [ RouterModule.forChild(AnimalRoutes) ],
  exports: [ RouterModule ]
})
export class AnimalRoutingModule {
}