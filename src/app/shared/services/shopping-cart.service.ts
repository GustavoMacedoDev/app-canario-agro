import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartItem } from '../models/cart-item.model';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  items: CartItem[] = [];

  constructor(private snackBar: MatSnackBar){}

  clear(){
    this.items = [];
  }

  addItem(item:MenuItem){
    let foundItem = this.items.find((mItem)=> mItem.animal.id === item.id);
    if(foundItem){
      this.increaseQty(foundItem);
    }else{
      this.items.push(new CartItem(item));
    }
    // let msg = "Você adicionou o item " + "  " + item.nome;
    // this.snackBar.open(msg, "ADD", { duration: 3000 })
  }

  increaseQty(item: CartItem){
    
  }

  removeItem(item:CartItem){
    this.items.splice(this.items.indexOf(item), 1);
    let msg = "Voce removeu o item" + " " + item.animal.nome;
    this.snackBar.open(msg, "Remove", { duration: 3000 });
  }

  total(): number{
    return this.items
      .map(item => item.value())
      .reduce((prev, value)=> prev+value, 0)
  }

  // value(): number {
  //     return this.items.map animal.pesoAtual * (this.arroba.valor / 15);
  // }
}
