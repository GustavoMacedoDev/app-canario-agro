import { Injectable } from '@angular/core';
import { Cart } from '../interfaces/cart';
import { Animal } from '../models/animal.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public storage: StorageService) { }

  createOrClearCart() : Cart {
    let cart: Cart = {itens: []};
    this.storage.setCart(cart);
    return cart;
}

  getCart() : Cart {
    let cart: Cart = this.storage.getCart();
    if (cart == null) {
        cart = this.createOrClearCart();
    }
    return cart;
}


  addAnimal(animal: Animal) : Cart {
    let cart = this.getCart();
    let position = cart.itens.findIndex(x => x.animal.id == animal.id);
    if (position == -1) {
        cart.itens.push({valorArroba: 1, animal: animal});
    }
    this.storage.setCart(cart);
    return cart;

    
  }
}
