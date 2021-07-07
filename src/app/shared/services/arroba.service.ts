import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env} from 'src/environments/environment';
import { Arroba } from '../models/arroba.model';
import { HttpUtilService } from './http-util.service';

@Injectable({
  providedIn: 'root'
})
export class ArrobaService {

  private readonly PATHCADASTRO: string = 'arroba/cadastra';
  private readonly PATHLISTA: string = 'arroba/arrobas';
  private readonly PATHLISTAARROBAATUAL: string = 'arroba/';

  constructor(public httpClient: HttpClient, 
    public httpUtil: HttpUtilService
  ) { }

  cadastrar(arroba: Arroba) : Observable<any> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post(env.baseUrl + this.PATHCADASTRO, arroba, this.httpUtil.headers());
  }

  listaArroba(id: any): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHLISTAARROBAATUAL + id, this.httpUtil.headers());
  }

}
