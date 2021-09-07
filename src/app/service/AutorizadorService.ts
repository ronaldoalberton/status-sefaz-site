import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {StatusServicoHistorico} from '../model/StatusServicoHistorico';
import {Autorizador} from '../model/Autorizador';

@Injectable({ providedIn: 'root' })
export class AutorizadorService {

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Autorizador[]>(`${environment.apiUrl}/autorizador`).toPromise();
  }

}
