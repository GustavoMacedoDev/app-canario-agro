import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env} from 'src/environments/environment';
import { CartItem } from '../models/cart-item.model';
import { Venda } from '../models/venda.model';
import { HttpUtilService } from './http-util.service';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  private readonly PATHCADASTRA: string = 'venda/cadastra';
  private readonly PATHLISTATODAS: string = 'venda/vendas';
  private readonly PATHLISTAPORID: string = 'venda/';

  constructor(private cartService: ShoppingCartService,
              private http: HttpClient, public httpUtil: HttpUtilService){}

  itemsValue(): number {
    return this.cartService.total()
  }

  cartItems(): CartItem[]{
    return this.cartService.items
  }

  increaseQty(item: CartItem){
    this.cartService.increaseQty(item)
  }

  remove(item: CartItem){
    this.cartService.removeItem(item)
  }

  clear(){
    this.cartService.clear()
  }

  checkOrder(venda: Venda): Observable<any> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    return this.http.post(env.baseUrl + this.PATHCADASTRA, venda,
       this.httpUtil.headers());
  }

  listaVendaPorId(id: string): Observable<any> {
    return this.http.get(env.baseUrl + this.PATHLISTAPORID + id, this.httpUtil.headers());
  }

  listaVendas(): Observable<any> {
    return this.http.get(env.baseUrl + this.PATHLISTATODAS, this.httpUtil.headers());
  }


}

