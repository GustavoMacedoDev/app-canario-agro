import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { Produtor } from '../models/produtor.model';
import { HttpUtilService } from './http-util.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutorService {

  private readonly PATHCADASTRA: string = 'produtor/cadastra';
  private readonly PATHLISTA: string = 'produtor/produtores';

  constructor(public httpClient: HttpClient,
    public httpUtil: HttpUtilService) { }

    listaProdutores(): Observable<any> {
      return this.httpClient.get(env.baseUrl + this.PATHLISTA,
        this.httpUtil.headers());
    }

    cadastraProdutor(produtor: Produtor): Observable<any> {
      return this.httpClient.post(env.baseUrl + this.PATHCADASTRA, produtor,
        this.httpUtil.headers());
    }
}
