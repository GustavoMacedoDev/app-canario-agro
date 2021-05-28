import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { Fornecedor } from '../models/fornecedor.model';
import { Produtor } from '../models/produtor.model';
import { HttpUtilService } from './http-util.service';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  
  private readonly PATHCADASTRA: string = 'fornecedor/cadastra';
  private readonly PATHLISTA: string = 'fornecedor/fornecedores';

  constructor(public httpClient: HttpClient,
    public httpUtil: HttpUtilService) { }

  listaFornecedor(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHLISTA,
      this.httpUtil.headers());
  }

  cadastraFornecedor(fornecedor: Fornecedor): Observable<any> {
    return this.httpClient.post(env.baseUrl + this.PATHCADASTRA, fornecedor,
      this.httpUtil.headers());
  }
}
