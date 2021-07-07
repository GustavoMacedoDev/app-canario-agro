import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { Pessoa } from '../models/pessoa.model';
import { HttpUtilService } from './http-util.service';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly PATHCADASTRA: string = 'pessoa/cadastra';
  private readonly PATHLISTA: string = 'pessoa/pessoas';

  constructor(public httpClient: HttpClient,
    public httpUtil: HttpUtilService) { }

  listaPessoas() : Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHLISTA,
      this.httpUtil.headers());
  }

  cadastrarPessoa(pessoa: Pessoa): Observable<any> {
    return this.httpClient.post(env.baseUrl + this.PATHCADASTRA,
      pessoa, this.httpUtil.headers());
  }
}
