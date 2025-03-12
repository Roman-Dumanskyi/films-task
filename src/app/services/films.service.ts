import { Injectable } from '@angular/core';
import {BaseHttpService} from './base-http.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FilmDetails} from '../interfaces/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService extends BaseHttpService {

  constructor(http: HttpClient) {
    super(http);
  }

  getFilms(title: string): Observable<FilmDetails> {
    return this.get<any>(`?t=${title}&apikey=2021796f`);
  }
}
