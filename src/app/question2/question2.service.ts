import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Question2Service {
  baseUrl = 'https://api.publicapis.org/categories';
  httpHeaders = new HttpHeaders({
      // "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT",
      // "Access-Control-Allow-Headers": "X-Requested-With,content-type",
      // "Access-Control-Allow-Credentials": "true",
      })
  constructor(private http: HttpClient) {
  }

  getData(): Observable<HttpResponse<string[]>> {
      return this.http.get<string[]>(
      this.baseUrl,
      {
          observe: 'response',
          headers: this.httpHeaders
      }
      );
  }
}
