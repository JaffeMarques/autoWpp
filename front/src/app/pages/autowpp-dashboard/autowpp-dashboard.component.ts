import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnectionService } from 'src/app/services/connection.service';
import { QrCodeDialog } from './dialogs/qrcode/autowpp-qrcode-dialog.component';
import { NewConnectionDialog } from './dialogs/new-connection/autowpp-new-connection-dialog.compoment';
import { interval, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-autowpp-dashboard',
  templateUrl: './autowpp-dashboard.component.html',
  styleUrls: ['./autowpp-dashboard.component.scss'],
})
export class AutowppDashboardComponent {
  header = ['Nome', 'Status', 'Sessão', 'Última atualização', ''];
  connections: any;
  private waitingQr = false;
  private unsubscribe$ = new Subject();

  constructor(
    private connectionService: ConnectionService,
    public qrCodeDialog: MatDialog,
    public newConnectionDialog: MatDialog
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
          status: connection.status,
        },
        {
          type: 'button',
          variant: 'small',
          label: 'QR CODE',
          disabled: connection.status == 2 ? false : true,
          onclick: () => {
            this.openQrCodeDialog(connection);
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

  async openQrCodeDialog(connection: any) {
    const qrcode = connection.qrCode;
    this.qrCodeDialog.open(QrCodeDialog, {
      data: { name: connection.name, qrcode: qrcode },
    });
  }

  async openNewConnectionDialog() {
    const dialogResponse = this.newConnectionDialog.open(NewConnectionDialog, {
      height: '32%',
      width: '40%',
    });

    dialogResponse.componentInstance.success.subscribe((result) => {
      if (result) {
        this.waitingQr = true;
        this.ngOnInit();

        const interval$ = interval(5000);
        interval$
          .pipe(
            filter(() => this.waitingQr),
            takeUntil(this.unsubscribe$)
          )
          .subscribe(() => {
            this.ngOnInit();
            this.awaitingQrCode();
          });
      }
    });
  }

  async awaitingQrCode(): Promise<void> {
    this.waitingQr =
      (await this.connections.filter((con: any) => con[1].status == 0)).length >
      0;
  }

  ngOnDestroy() {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }

  async delete(id: string) {
    console.log(id);
  }
}
