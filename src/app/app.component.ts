import {Component, inject, OnInit} from '@angular/core';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FilmsService} from './services/films.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {debounceTime, switchMap} from 'rxjs';
import {FilmDetails} from './interfaces/film.interface';



@Component({
  selector: 'app-root',
  imports: [
    MatFormFieldModule,
    MatFormField,
    MatInput,
    ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  filmsService = inject(FilmsService);
  film?: FilmDetails;

  searchForm = new FormGroup({
    title: new FormControl('')
  })

  ngOnInit(): void {
    this.searchForm.valueChanges.pipe(
      debounceTime(300),
      switchMap(value => {
        const title = value?.title ?? '';
        return this.filmsService.getFilms(title);
      })
    ).subscribe(res => {
      this.film = res;
    });
  }
}
