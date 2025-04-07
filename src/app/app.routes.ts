import { Routes } from '@angular/router';
import {MoviePageComponent} from './Pages/movie/page/movie-page.component';
import {ReservationPageComponent} from './Pages/reservation/page/reservation-page.component';
import {RoomPageComponent} from './Pages/room/page/room-page.component';
import {RegisterMovieComponent} from './Pages/movie/components/register-movie/register-movie.component';


export const routes: Routes = [
  {
    path: '',
    component: MoviePageComponent,
  },
  {
    path: 'reservation',
    component: ReservationPageComponent,
  },
  {
    path: 'room',
    component: RoomPageComponent,
  },
  {
    path: 'regMovie',
    component: RegisterMovieComponent
  }
];
