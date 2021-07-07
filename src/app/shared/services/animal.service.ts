import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env} from 'src/environments/environment';
import { Animal } from '../models/animal.model';
import { HttpUtilService } from './http-util.service';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private readonly PATHCADASTRO: string = 'animal/cadastra';
  private readonly PATHLISTATODOS: string = 'animal/animais';
  private readonly PATHLISTAEMESTOQUE: string = 'animal/animaisemestoque';
  private readonly PATHLISTABYID: string = 'animal/';

  constructor(public httpClient: HttpClient, 
              public httpUtil: HttpUtilService
  ) { }

  cadastrar(animal: Animal) : Observable<any> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post(env.baseUrl + this.PATHCADASTRO, animal, this.httpUtil.headers());
  }

  listaTodos() : Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHLISTATODOS, this.httpUtil.headers());
  }

  listaEmEstoque() : Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHLISTAEMESTOQUE, this.httpUtil.headers());
  }

  listaById(id: string) : Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATHLISTABYID + id, this.httpUtil.headers());
  }
}
