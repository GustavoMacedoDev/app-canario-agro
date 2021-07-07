import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-revisa-venda',
  templateUrl: './revisa-venda.component.html',
  styleUrls: ['./revisa-venda.component.css']
})
export class RevisaVendaComponent implements OnInit {

  @Input() itemsValue: number;

  constructor() { }

  ngOnInit() {
  }

  total(): number {
    return this.itemsValue
  }

}
