import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { Categoria } from '../models/categoria.model';
import { Medicamento } from '../models/medicamento.model';
import { HttpUtilService } from './http-util.service';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  private readonly PATHCADASTRA: string = 'medicamento/cadastra';
  private readonly PATHLISTA: string = 'medicamento/medicamentos';

  constructor(public httpClient: HttpClient,
    public httpUtil: HttpUtilService) { }

  listaMedicamentos() : Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHLISTA,
      this.httpUtil.headers());
  }

  cadastrarMedicamento(medicamento: Medicamento): Observable<any> {
    return this.httpClient.post(env.baseUrl + this.PATHCADASTRA,
      medicamento, this.httpUtil.headers());
  }
}
