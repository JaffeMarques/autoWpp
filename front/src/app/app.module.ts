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
import { AutowppNavComponent } from './organisms/autowpp-nav/autowpp-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    AutowppLabelComponent,
    AutowppInputComponent,
    AutowppHeaderComponent,
    AutowppLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutowppButtonComponent,
    BrowserAnimationsModule,
    AutowppNavComponent,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
