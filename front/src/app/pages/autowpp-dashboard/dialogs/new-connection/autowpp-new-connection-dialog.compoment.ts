import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'autowpp-new-connection-dialog',
  templateUrl: 'autowpp-new-connection-dialog.component.html',
  styleUrls: ['./autowpp-new-connection-dialog.component.scss'],
})
export class NewConnectionDialog {
  public name: string = '';
  public error: boolean = false;

  @Output()
  success = new EventEmitter();

  constructor(
    private connectionService: ConnectionService,
    public dialogRef: MatDialogRef<NewConnectionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  async createConnection(): Promise<void> {
    try {
      const response = await this.connectionService.create(this.name);

      if (response) {
        this.success.emit({ created: true });
        this.onNoClick();
      }
    } catch (error) {
      this.error = true;
    }
  }
}
