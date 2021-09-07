import {Autorizador} from './Autorizador';
import {StatusServico} from './StatusServico';
import {Time} from '@angular/common';

export class StatusServicoHistorico {

  id: number;

  autorizador: Autorizador;

  autorizacao: StatusServico;

  retornoAutorizacao: StatusServico;

  inutilizacao: StatusServico;

  consultaProtocolo: StatusServico;

  statusServico: StatusServico;

  consultaCadastro: StatusServico;

  recepecaoEvento: StatusServico;

  dataStatus: Date;

  horaStatus: Time;

}
