import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Raca } from '../models/raca.model';
import { HttpUtilService } from './http-util.service';
import { environment as env } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RacaService {

  private readonly PATHCADASTRA: string = 'raca/cadastra';
  private readonly PATHLISTA: string = 'raca/racas';

  constructor(public httpClient: HttpClient,
    public httpUtil: HttpUtilService) { }


    cadastraRaca(raca: Raca): Observable<any> {
      return this.httpClient.post(env.baseUrl + this.PATHCADASTRA,
        raca, this.httpUtil.headers());
    }

    listaRacas(): Observable<any> {
      return this.httpClient.get(env.baseUrl + this.PATHLISTA,
        this.httpUtil.headers());
    }
}
