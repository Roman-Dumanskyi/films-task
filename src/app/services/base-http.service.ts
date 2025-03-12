import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  baseUrl = 'http://www.omdbapi.com';
  constructor(private http: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
  }

  // post<T>(endpoint: string, body: any): Observable<T> {
  //   return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body);
  // }
  //
  // put<T>(endpoint: string, body: any): Observable<T> {
  //   return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body);
  // }
  //
  // delete<T>(endpoint: string): Observable<T> {
  //   return this.http.delete<T>(`${this.baseUrl}/${endpoint}`);
  // }

}
// http://www.omdbapi.com/?t=Taxi&apikey=2021796f
