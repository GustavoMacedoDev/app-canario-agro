import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Venda } from 'src/app/shared/models/venda.model';
import { VendaService } from 'src/app/shared/services/venda.service';
import * as jsPdf from  'jspdf';

@Component({
  selector: 'app-lista-venda',
  templateUrl: './lista-venda.component.html',
  styleUrls: ['./lista-venda.component.css']
})
export class ListaVendaComponent implements OnInit {

  venda: Venda;
  vendaId: string;
  @ViewChild('report') report: ElementRef;


  constructor(
    private vendaService: VendaService,
    private router: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.vendaId = this.router.snapshot.params['id'];
    this.obterDadosVenda();
  }

  obterDadosVenda() {
    this.vendaService.listaVendaPorId(this.vendaId).subscribe(res => this.venda = res);
  }

  imprimir(){
    let doc = new jsPdf();

    let specialElementHandlers = {
      '#editor': function(element, renderer) {
        return true;
      } 
    };

    let report = this.report.nativeElement;

    doc.fromHTML(report.innerHTML, 5, 5, {
      'width': 70,
      'height': 100,
      'elementHandlers': specialElementHandlers,
    });

    doc.autoPrint();

    doc.output('dataurlnewwindow');
  }
}
