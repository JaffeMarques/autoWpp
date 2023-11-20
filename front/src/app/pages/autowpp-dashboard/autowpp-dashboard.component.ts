import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnectionService } from 'src/app/services/connection.service';
import { QrCodeDialog } from './dialogs/autowpp-qrcode-dialog.component';

@Component({
  selector: 'app-autowpp-dashboard',
  templateUrl: './autowpp-dashboard.component.html',
  styleUrls: ['./autowpp-dashboard.component.scss'],
})
export class AutowppDashboardComponent {
  header = ['Nome', 'Status', 'Sessão', 'Última atualização', ''];
  connections: any;

  constructor(
    private connectionService: ConnectionService,
    public dialog: MatDialog
  ) {}

  async ngOnInit() {
    const response = await this.connectionService.getConnections();
    this.connections = response.map((connection: any) => {
      let labelStatus = 'Aguardando';
      let colorStatus = 'gray';
      let iconStatus = 'pending';

      if (connection.status == 3) {
        labelStatus = 'Conectado';
        colorStatus = 'green';
        iconStatus = 'check_circle';
      } else if (connection.status == 2) {
        labelStatus = 'Pendente';
        colorStatus = 'yellow';
        iconStatus = 'info';
      } else if (connection.status == 4) {
        labelStatus = 'Erro';
        colorStatus = 'red';
        iconStatus = 'cancel';
      }

      return [
        {
          type: 'text',
          label: connection.name,
        },
        {
          type: 'text',
          label: labelStatus,
          icon: iconStatus,
          iconColor: colorStatus,
        },
        {
          type: 'button',
          variant: 'small',
          label: 'QR CODE',
          disabled: connection.status == 2 ? false : true,
          onclick: () => {
            this.openModal(connection);
          },
        },
        {
          type: 'text',
          label: new Date(connection.updatedAt).toLocaleString('pt-BR'),
        },
        {
          type: 'button',
          variant: 'outline',
          icon: 'delete',
          onclick: () => {
            this.delete(connection.id);
          },
        },
      ];
    });
  }

  async openModal(connection: any) {
    const qrcode = connection.qrCode;
    this.dialog.open(QrCodeDialog, {
      data: { name: connection.name, qrcode: qrcode },
    });
  }

  async delete(id: string) {
    console.log(id);
  }
}
