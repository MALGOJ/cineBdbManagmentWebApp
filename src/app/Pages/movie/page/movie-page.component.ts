import { Component } from '@angular/core';
import {Movie} from '../../../models/movie/movie.model';
import {MovieService} from '../../../services/movie/movie.service';
import {MovieCardComponent} from '../components/movie-card/movie-card.component';
import {NgForOf} from '@angular/common';
import {NavbarComponent} from '../../layout/components/navbar/navbar.component';

@Component({
  selector: 'app-movie-page',
  imports: [
    MovieCardComponent,
    NgForOf,
    NavbarComponent
  ],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
  standalone: true,
})
export class MoviePageComponent {

  movies: Movie[] = [];
  filter: string = 'today';

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getAllMovies().subscribe({
      next: (movies) => this.movies = movies,
      error: (err) => console.error('Error loading movies:', err)
    });
  }

  setFilter(filter: string) {
    this.filter = filter;
    // Lógica adicional para filtrar (puedes hacerlo en el servicio o aquí)
  }
  onDateChange(selectedDate: string) {
    console.log('Fecha seleccionada:', selectedDate);
    // Lógica para filtrar películas por fecha:
    // this.movieService.getMoviesByDate(selectedDate).subscribe(...);
  }
}
