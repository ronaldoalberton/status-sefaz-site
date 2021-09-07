import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {StatusServicoHistorico} from '../model/StatusServicoHistorico';
import {Autorizador} from '../model/Autorizador';
import {TotalizadorStatus} from '../model/TotalizadorStatus';

@Injectable({ providedIn: 'root' })
export class TotalizadorStatusService {

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<TotalizadorStatus[]>(`${environment.apiUrl}/totalizadorstatus`).toPromise();
  }

}
