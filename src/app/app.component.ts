import {Component, OnInit} from '@angular/core';
import {StatusServicoHistoricoService} from './service/StatusServicoHistoricoService';
import {StatusServicoHistorico} from './model/StatusServicoHistorico';
import {Autorizador} from './model/Autorizador';
import {AutorizadorService} from './service/AutorizadorService';
import {TotalizadorStatusService} from './service/TotalizadorStatusService';
import {TotalizadorStatus} from './model/TotalizadorStatus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  autorizadorList: Autorizador[];
  statusServicoHistoricoList: StatusServicoHistorico[];
  selectedIdAutorizador: number;
  selectedData: Date;
  totalizadorStatusList: TotalizadorStatus[];
  chartData: any;
  loadingData: boolean = false;

  constructor(private statusServicoHistoricoService: StatusServicoHistoricoService,
              private autorizadorService: AutorizadorService,
              private totalizadorStatusService: TotalizadorStatusService) { }

  ngOnInit() {
    const autorizador: Autorizador = new Autorizador();
    autorizador.idAutorizador = null;
    autorizador.descricaoAutorizador = 'Todos';

    this.statusServicoHistoricoService.findAll().then(response => {
      this.statusServicoHistoricoList = response;
    });

    this.autorizadorService.findAll().then(response => {
      this.autorizadorList = response;
      this.autorizadorList.push(autorizador);
    });

    this.totalizadorStatusService.findAll().then(response => {
      this.totalizadorStatusList = response;
      const labelsValues = [];
      const dataValues = [];
      this.totalizadorStatusList.forEach(totalizadorStatus => {
        labelsValues.push(totalizadorStatus.autorizador.siglaAutorizador);
        dataValues.push(totalizadorStatus.nrTotalOffline);
      });

      this.chartData = {
        labels: labelsValues,
        datasets: [
          {
            label: 'Número de ocorrências',
            data: dataValues
          }
        ]
      };

    });

  }

  filter() {
    this.loadingData = true;
    this.statusServicoHistoricoService.filter(this.selectedIdAutorizador, this.selectedData).then(response => {
      this.statusServicoHistoricoList = response;
      this.loadingData = false;
    });
  }

}
