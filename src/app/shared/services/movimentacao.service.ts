import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env} from 'src/environments/environment';
import { Movimentacao } from '../models/movimentacao.model';
import { HttpUtilService } from './http-util.service';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  private readonly PATHCADASTRO: string = 'movimentacao/cadastra';
  private readonly PATHLISTATODOS: string = 'movimentacao/movimentacoes';

  constructor(public httpClient: HttpClient, 
              public httpUtil: HttpUtilService
  ) { }

  cadastrar(movimentacao: Movimentacao) : Observable<any> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post(env.baseUrl + this.PATHCADASTRO, movimentacao, this.httpUtil.headers());
  }

  listaTodos() : Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHLISTATODOS, this.httpUtil.headers());
  }
}