import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subscriber, catchError, lastValueFrom } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  apiUrl: string = environment.apiUrl;
  error: string = '';

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  async getConnections() {
    const url = `${this.apiUrl}connection`;
    const headers = await this.storageService.getHeaders();

    if (headers) {
      const response: any = await lastValueFrom(
        this.http.get(url, { headers: headers })
      );

      if (response) {
        return response;
      }
    }

    return false;
  }

  async create(name: string): Promise<boolean> {
    const url = `${this.apiUrl}connection`;
    const headers = await this.storageService.getHeaders();
    const data = {
      name: name,
    };

    const response: any = await lastValueFrom(
      this.http.post(url, data, { headers: headers })
    );

    if (response) {
      return true;
    }

    return false;
  }
}
