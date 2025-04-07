import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ReservationService} from '../../../../services/reservation/reservation.service';
import {Reservation} from '../../../../models/reservation/reservation.model';

@Component({
  selector: 'app-reservation-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss'
})
export class ReservationFormComponent {
  private reservationService = inject(ReservationService);

  reservation: Reservation = {
    movieIdDto: 0,
    roomIdDto: 0,
    customerEmailDto: '',
    scheduleDto: new Date(),
    selectedSeatsDto: [],
  };

  onSubmit() {
    this.reservationService.createReservation(this.reservation).subscribe({
      next: () => alert('Reserva creada con éxito'),
      error: () => alert('Error al crear la reserva'),
    });

    console.log('Reserva creada:', this.reservation);
  }

  onSeatsChange(event: string): void {
    this.reservation.selectedSeatsDto = event.split(',').map(s => s.trim());
  }

}
