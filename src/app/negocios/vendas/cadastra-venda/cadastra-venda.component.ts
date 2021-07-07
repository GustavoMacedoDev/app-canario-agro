import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/shared/models/animal.model';
import { AnimalService } from 'src/app/shared/services/animal.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Arroba } from 'src/app/shared/models/arroba.model';
import { ArrobaService } from 'src/app/shared/services/arroba.service';

@Component({
  selector: 'app-cadastra-venda',
  templateUrl: './cadastra-venda.component.html',
  styleUrls: ['./cadastra-venda.component.css'],
  animations: [
    trigger('row', [
      state('ready', style({opacity: 1})),
      transition('void => ready', animate('300ms 0s ease-in', keyframes([
        style({opacity:0, transform: 'translateX(-30px)', offset:0}),
        style({opacity:0.8, transform: 'translateX(10px)', offset:0.8}),
        style({opacity:1, transform: 'translateX(0px)', offset:1})
      ]))),
      transition('ready => void', animate('300ms 0s ease-out', keyframes([
        style({opacity:1, transform: 'translateX(0px)', offset:0}),
        style({opacity:0.8, transform: 'translateX(-10px)', offset:0.2}),
        style({opacity:0, transform: 'translateX(30px)', offset:1})
      ])))
    ])
  ]
})
export class CadastraVendaComponent implements OnInit {

  animais: Animal[];
  rowState = 'ready';
  arroba: Arroba;

  constructor(
    private animalService: AnimalService,
    private shoppingCartService: ShoppingCartService,
    private arrobaService: ArrobaService
  ) { }

  ngOnInit(): void {
    this.animalService.listaEmEstoque().subscribe(res => this.animais = res);
    this.arrobaService.listaArroba(1).subscribe(res => this.arroba = res);
  }


  addItem(animal: any) {
    this.shoppingCartService.addItem(animal);
  }

  items(): any[] {
    return this.shoppingCartService.items;
  }

  clear(){
    this.shoppingCartService.clear()
  }

  removeItem(item: any){
    this.shoppingCartService.removeItem(item)
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  
}
