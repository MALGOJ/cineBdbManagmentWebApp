import {Component, Input, OnInit} from '@angular/core';
import { MovieService } from '../../../../services/movie/movie.service';
import {Movie} from '../../../../models/movie/movie.model';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;
  posterFilenames: string[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getAllMovies().subscribe({
      next: movies => {
        this.posterFilenames = movies.map(movie => movie.posterFilenameDto);
      },
      error: err => alert('Error fetching movie data')
    });
  }
}
