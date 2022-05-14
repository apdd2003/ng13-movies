import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, MovieDto, MovieImages, MovieVideoDto } from '../models/movies';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MoviesService implements OnInit {

  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '77f491236b9bccd55f28318ed627f1b2';
  constructor(private http: HttpClient) { }

  getMovies(type: string = 'upcoming', count: number = 12) {

    return this.http.get<MovieDto>(
      `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results.slice(0, count));
      }));

  }

  getMovie(id: string) {

    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);


  }

  getMovieImages(id: string) {

    return this.http.get<MovieImages>(
      `${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);

  }

  getMovieCredits(id: string) {

    return this.http.get<MovieCredits>(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);

  }


  searchMovies(page: number) {

    return this.http.get<MovieDto>(
      `${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results);
      }));

  }


  getMovieVideos(id: string) {

    return this.http.get<MovieVideoDto>(
      `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results);
      }));

  }


  ngOnInit(): void {

  }
}
