import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastraCategoriaComponent } from './cadastra-categoria/cadastra-categoria.component';
import { ListaCategoriaComponent } from './lista-categoria/lista-categoria.component';

export const CategoriaRoutes: Routes = [
  {
    path: 'cadastra-categoria',
    component: CadastraCategoriaComponent
  },
  {
    path: 'lista-categoria',
    component: ListaCategoriaComponent
  }
  
	
];

@NgModule({
  imports: [ RouterModule.forChild(CategoriaRoutes) ],
  exports: [ RouterModule ]
})
export class CategoriaRoutingModule {
}