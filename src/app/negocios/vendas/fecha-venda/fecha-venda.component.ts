import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { Venda } from 'src/app/shared/models/venda.model';
import { PessoaService } from 'src/app/shared/services/pessoa.service';
import { VendaService } from 'src/app/shared/services/venda.service';

@Component({
  selector: 'app-fecha-venda',
  templateUrl: './fecha-venda.component.html',
  styleUrls: ['./fecha-venda.component.css']
})
export class FechaVendaComponent implements OnInit {

  orderForm: FormGroup;
  pessoas: Pessoa[];

  constructor(
              private orderService: VendaService,
              private pessoaService: PessoaService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.geraForm();
    this.pessoaService.listaPessoas().subscribe(res => this.pessoas = res);
  }

  geraForm() {
    this.orderForm = this.formBuilder.group({
      observacao:['', ],
      pessoa:['', Validators.required],

  	});
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }

  checkOrder(venda: Venda) {
    venda.itens = this.cartItems()
      .map(x => {
        return {
          valorItem: x.value(),
          animal: {id: x.animal.id}
        }
      }
      );
    
    venda.totalVenda = this.itemsValue();
   
    this.orderService.checkOrder(venda)
      .subscribe( () => {
        this.router.navigate(['/lista-vendas'])
        this.orderService.clear()
    })
    
  }


}
