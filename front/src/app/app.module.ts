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

@NgModule({
  declarations: [
    AppComponent,
    AutowppLabelComponent,
    AutowppInputComponent,
    AutowppHeaderComponent,
    AutowppLoginComponent,
    AutowppDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutowppButtonComponent,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
