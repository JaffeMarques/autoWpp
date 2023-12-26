import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'autowpp-qrcode-dialog',
  templateUrl: 'autowpp-qrcode-dialog.component.html',
})
export class QrCodeDialog {
  constructor(
    public dialogRef: MatDialogRef<QrCodeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
