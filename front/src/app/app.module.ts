import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutowppButtonComponent } from './atoms/autowpp-button/autowpp-button.component';
import { AutowppLabelComponent } from './atoms/autowpp-label/autowpp-label.component';
import { AutowppInputComponent } from './atoms/autowpp-input/autowpp-input.component';
import { AutowppHeaderComponent } from './organisms/autowpp-header/autowpp-header.component';
import { AutowppLoginComponent } from './pages/autowpp-login/autowpp-login.component';
import { AutowppDashboardComponent } from './pages/autowpp-dashboard/autowpp-dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AutowppTableComponent } from './organisms/autowpp-table/autowpp-table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { QrCodeDialog } from './pages/autowpp-dashboard/dialogs/qrcode/autowpp-qrcode-dialog.component';
import { QRCodeModule } from 'angularx-qrcode';
import { NewConnectionDialog } from './pages/autowpp-dashboard/dialogs/new-connection/autowpp-new-connection-dialog.compoment';
import { InterceptorModule } from './interceptors/interceptor.module';

@NgModule({
  declarations: [
    AppComponent,
    AutowppLabelComponent,
    AutowppInputComponent,
    AutowppHeaderComponent,
    AutowppLoginComponent,
    AutowppDashboardComponent,
    AutowppTableComponent,
    QrCodeDialog,
    NewConnectionDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutowppButtonComponent,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    QRCodeModule,
    InterceptorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
