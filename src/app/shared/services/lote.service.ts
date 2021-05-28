import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { Categoria } from '../models/categoria.model';
import { Lote } from '../models/lote.model';
import { HttpUtilService } from './http-util.service';

@Injectable({
  providedIn: 'root'
})
export class LoteService {

  private readonly PATHCADASTRA: string = 'lote/cadastra';
  private readonly PATHLISTA: string = 'lote/lotes';

  constructor(public httpClient: HttpClient,
    public httpUtil: HttpUtilService) { }

  listaLotes() : Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHLISTA,
      this.httpUtil.headers());
  }

  cadastrarLote(lote: Lote): Observable<any> {
    return this.httpClient.post(env.baseUrl + this.PATHCADASTRA,
      lote, this.httpUtil.headers());
  }
}
