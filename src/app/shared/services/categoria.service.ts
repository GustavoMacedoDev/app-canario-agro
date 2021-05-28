import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { Categoria } from '../models/categoria.model';
import { HttpUtilService } from './http-util.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly PATHCADASTRA: string = 'categoria/cadastra';
  private readonly PATHLISTA: string = 'categoria/categorias';

  constructor(public httpClient: HttpClient,
    public httpUtil: HttpUtilService) { }

  listaCategorias() : Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHLISTA,
      this.httpUtil.headers());
  }

  cadastrarCategoria(categoria: Categoria): Observable<any> {
    return this.httpClient.post(env.baseUrl + this.PATHCADASTRA,
      categoria, this.httpUtil.headers());
  }

}
