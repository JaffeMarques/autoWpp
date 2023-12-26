import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  async destroyToken(key: string): Promise<boolean> {
    try {
      await localStorage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  }

  getHeaders() {
    const token = this.getToken();
    return new HttpHeaders().set('Authorization', 'Bearer ' + token);
  }
}
