import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaService } from 'src/app/shared/services/pessoa.service';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {

  pessoas: Pessoa[];

  constructor(
            private pessoaService: PessoaService
  ) { }

  ngOnInit(): void {
      this.pessoaService.listaPessoas().subscribe(res => this.pessoas = res);
  }

}
