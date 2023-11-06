import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-autowpp-login',
  templateUrl: './autowpp-login.component.html',
  styleUrls: ['./autowpp-login.component.scss'],
})
export class AutowppLoginComponent {
  public userName: string = '';
  public password: string = '';
  public error: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  async login() {
    if (!this.userName || !this.password) {
      this.error = 'Verifique os dados e tente novamente';
    } else {
      try {
        const logged = await this.loginService.login(
          this.userName,
          this.password
        );

        if (!logged) {
          this.error = 'Verifique os dados e tente novamente';
        }

        this.router.navigate(['/home']);
      } catch (error) {
        this.error = 'Falha ao se comunicar com o servidor';
      }
    }
  }
}
