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

  async delete(id: number) {
    const url = `${this.apiUrl}connection/${id}`;
    const headers = await this.storageService.getHeaders();

    const response = await lastValueFrom(
      this.http.delete(url, { headers: headers })
    );
  }
}
