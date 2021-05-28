import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { Raca } from '../models/raca.model';
import { TipoMedicamento } from '../models/tipo-medicamento.model';
import { HttpUtilService } from './http-util.service';


@Injectable({
  providedIn: 'root'
})
export class TipoMedicamentoService {

  private readonly PATHCADASTRA: string = 'tipoMedicamento/cadastra';
  private readonly PATHLISTA: string = 'tipoMedicamento/tipos';

  constructor(public httpClient: HttpClient,
    public httpUtil: HttpUtilService) { }


    cadastraTipoMedicamento(tipoMedicamento: TipoMedicamento): Observable<any> {
      return this.httpClient.post(env.baseUrl + this.PATHCADASTRA,
        tipoMedicamento, this.httpUtil.headers());
    }
    listaTipos(): Observable<any> {
      return this.httpClient.get(env.baseUrl + this.PATHLISTA,
        this.httpUtil.headers());
    }
}
