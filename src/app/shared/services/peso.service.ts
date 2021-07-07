import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Peso } from '../models/peso.model';
import { HttpUtilService } from './http-util.service';


@Injectable({
  providedIn: 'root'
})
export class PesoService {

  private readonly PATHCADASTRA: string = 'peso/cadastra';
  private readonly PATHLISTABYID: string = 'peso/';

  constructor(public httpClient: HttpClient,
    public httpUtil: HttpUtilService) { }

  listaPesosByIdAnimal(id: string) : Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHLISTABYID + id,
      this.httpUtil.headers());
  }

  cadastrarPeso(peso: Peso): Observable<any> {
      return this.httpClient.post(env.baseUrl + this.PATHCADASTRA,
      peso, this.httpUtil.headers());
  }
}
