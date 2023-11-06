import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subscriber, catchError, lastValueFrom } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  apiUrl: string = environment.apiUrl;
  error: string = '';

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  async login(username: string, password: string) {
    const url = `${this.apiUrl}auth/login`;
    const data = {
      username: username,
      password: password,
    };

    const response: any = await lastValueFrom(this.http.post(url, data));

    if (response.access_token) {
      this.storageService.setToken('token');
      return true;
    }

    return false;
  }
}
