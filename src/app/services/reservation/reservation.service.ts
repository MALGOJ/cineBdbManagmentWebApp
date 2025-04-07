import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.common';
import { Reservation } from '../../models/reservation/reservation.model';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private httpClient = inject(HttpClient);
  private readonly API_URL = `${environment.apiUrl}/reservations`;

  // CRUD
  getAllReservations() {
    return this.httpClient.get<Reservation[]>(this.API_URL);
  }

  getReservationById(id: number) {
    return this.httpClient.get<Reservation>(`${this.API_URL}/${id}`);
  }

  createReservation(reservation: Reservation) {
    return this.httpClient.post<Reservation>(this.API_URL, reservation);
  }

  deleteReservation(id: number) {
    return this.httpClient.delete<void>(`${this.API_URL}/${id}`);
  }

  // Métodos específicos
  getReservationsByMovie(movieId: number) {
    return this.httpClient.get<Reservation[]>(`${this.API_URL}/movie/${movieId}`);
  }

  getReservationsByCustomerEmail(email: string) {
    return this.httpClient.get<Reservation[]>(`${this.API_URL}/customer/${email}`);
  }

  getAvailableSeats(roomId: number, schedule: string) {
    return this.httpClient.get<string[]>(
      `${this.API_URL}/available-seats?roomId=${roomId}&schedule=${schedule}`
    );
  }

  generateReservationReport() {
    return this.httpClient.get<Map<string, number>>(`${this.API_URL}/report`);
  }
}
