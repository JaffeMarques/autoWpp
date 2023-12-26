import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-autowpp-header',
  templateUrl: './autowpp-header.component.html',
  styleUrls: ['./autowpp-header.component.scss'],
})
export class AutowppHeaderComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  async logOut() {
    const response = await this.loginService.logOut();
    if (response) {
      this.router.navigate(['/login']);
    }
  }
}
