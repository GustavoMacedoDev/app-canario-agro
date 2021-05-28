import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env} from 'src/environments/environment';
import { Animal } from '../models/animal.model';
import { Aplicacao } from '../models/aplicacao.model';
import { HttpUtilService } from './http-util.service';

@Injectable({
  providedIn: 'root'
})
export class AplicacaoService {

  private readonly PATHCADASTRO: string = 'aplicacao/cadastra';
  private readonly PATHLISTATODOS: string = 'aplicacao/aplicacoes';

  constructor(public httpClient: HttpClient, 
              public httpUtil: HttpUtilService
  ) { }

  cadastrar(aplicacao: Aplicacao) : Observable<any> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post(env.baseUrl + this.PATHCADASTRO, aplicacao, this.httpUtil.headers());
  }

  listaTodos() : Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHLISTATODOS, this.httpUtil.headers());
  }
}
