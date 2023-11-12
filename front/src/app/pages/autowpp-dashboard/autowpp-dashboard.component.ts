import { Component } from '@angular/core';

@Component({
  selector: 'app-autowpp-dashboard',
  templateUrl: './autowpp-dashboard.component.html',
  styleUrls: ['./autowpp-dashboard.component.scss'],
})
export class AutowppDashboardComponent {
  header = ['Nome', 'Status', 'Sessão', 'Última atualização'];
  lines = [
    {
      name: 'nome 1',
      status: 1,
      session: 'teste',
      lastUpdate: '2023-11-12',
    },
    {
      name: 'nome 2',
      status: 1,
      session: 'teste',
      lastUpdate: '2023-11-12',
    },
    {
      name: 'nome 3',
      status: 1,
      session: 'teste',
      lastUpdate: '2023-11-12',
    },
  ];
}
