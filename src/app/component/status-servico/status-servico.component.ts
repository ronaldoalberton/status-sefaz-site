import {Component, Input, OnInit} from '@angular/core';
import {StatusServico} from '../../model/StatusServico';

@Component({
  selector: 'app-status-servico',
  templateUrl: './status-servico.component.html',
  styleUrls: ['./status-servico.component.sass']
})
export class StatusServicoComponent implements OnInit {

  @Input()
  statusServico: StatusServico;

  constructor() { }

  ngOnInit(): void {
  }

}
