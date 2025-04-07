import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.common';
import { Movie } from '../../models/movie/movie.model';
import {Observable} from 'rxjs';
import {RegisterMovie} from '../../models/movie/registerMovie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private httpClient = inject(HttpClient);
  private readonly API_URL = `${environment.apiUrl}/movies`;

  // CRUD
  getAllMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.API_URL);
  }


  getMovieById(id: number) {
    return this.httpClient.get<Movie>(`${this.API_URL}/${id}`);
  }

  createMovie(movie: RegisterMovie) {
    return this.httpClient.post<Movie>(this.API_URL, movie);
  }

  updateMovie(id: number, movie: Movie) {
    return this.httpClient.put<Movie>(`${this.API_URL}/${id}`, movie);
  }

  deleteMovie(id: number) {
    return this.httpClient.delete<void>(`${this.API_URL}/${id}`);
  }

  // Métodos específicos
  getMoviesByGender(gender: string) {
    return this.httpClient.get<Movie[]>(`${this.API_URL}/gender/${gender}`);
  }

  assignRoomToMovie(movieId: number, roomId: number) {
    return this.httpClient.post<void>(
      `${this.API_URL}/${movieId}/assign-room/${roomId}`,
      null
    );
  }
}
