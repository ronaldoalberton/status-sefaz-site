import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {StatusServicoHistorico} from '../model/StatusServicoHistorico';

@Injectable({ providedIn: 'root' })
export class StatusServicoHistoricoService {

  private filterParams: string;

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<StatusServicoHistorico[]>(`${environment.apiUrl}/statusServicoHistorico`).toPromise();
  }

  filter(idAutorizador, data) {
    this.filterParams = '';
    if (idAutorizador) {
      this.filterParams = this.filterParams + `idAutorizador=${idAutorizador}`;
    }
    if (data) {
      if (this.filterParams !== '?') {
        this.filterParams = this.filterParams + `&`;

      }
      this.filterParams = this.filterParams + `dataStatus=${data.toISOString()}`;
    }
    if (this.filterParams !== '') {
      this.filterParams = `?` + this.filterParams;
    }
    return this.http.get<StatusServicoHistorico[]>(`${environment.apiUrl}/statusServicoHistorico/filter${this.filterParams}`).toPromise();
  }

}
