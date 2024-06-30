import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.clever.com/v1/'; // Example URL

  constructor(private http: HttpClient) { }

  getReferrals(): Observable<any> {
    return this.http.get(`${this.apiUrl}/referrals`);
  }

  getServices(): Observable<any> {
    return this.http.get(`${this.apiUrl}/services`);
  }
}
