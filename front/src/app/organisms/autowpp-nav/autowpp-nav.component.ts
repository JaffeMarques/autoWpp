import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-autowpp-nav',
  templateUrl: './autowpp-nav.component.html',
  styleUrls: ['./autowpp-nav.component.scss'],
  standalone: true,
  imports: [MatSidenavModule, NgIf, MatButtonModule],
})
export class AutowppNavComponent {
  showFiller = false;
}
