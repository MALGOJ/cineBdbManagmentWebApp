import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RegisterMovie} from '../../../../models/movie/registerMovie.model';
import {MovieService} from '../../../../services/movie/movie.service';
import {NavbarComponent} from '../../../layout/components/navbar/navbar.component';


@Component({
  selector: 'app-register-movie',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './register-movie.component.html',
  styleUrls: ['./register-movie.component.scss'],
})
export class RegisterMovieComponent {
  movie: RegisterMovie = {
    titleDto: '',
    genderDto: '',
    durationMinutesDto: 0,
    ratingDto: '',
    posterFilenameDto: ''
  };

  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private movieService: MovieService) {}

  onSubmit(): void {
    this.movieService.createMovie(this.movie).subscribe({
      next: () => {
        this.successMessage = 'Película registrada exitosamente.';
        this.errorMessage = null;
        this.resetForm();
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Ocurrió un error al registrar la película.';
        this.successMessage = null;
      },
    });
  }

  private resetForm(): void {
    this.movie = {
      titleDto: '',
      genderDto: '',
      durationMinutesDto: 0,
      ratingDto: '',
      posterFilenameDto: ''
    };
  }
}
