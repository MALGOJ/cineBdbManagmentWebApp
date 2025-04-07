import { Component, Input, OnChanges } from '@angular/core';
import { ReservationService } from '../../../../services/reservation/reservation.service';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-seat-selection',
  standalone: true,
  imports: [
    NgClass,
    CommonModule
  ],
  templateUrl: './seat-selection.component.html',
  styleUrl: './seat-selection.component.scss'
})
export class SeatSelectionComponent implements OnChanges {
  @Input() roomId!: number;
  @Input() schedule!: string;

  availableSeats: string[] = [];
  selectedSeats: string[] = [];
  groupedSeats: { [key: string]: string[] } = {};
  seatRows: string[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnChanges() {
    if (this.roomId && this.schedule) {
      this.reservationService.getAvailableSeats(this.roomId, this.schedule).subscribe({
        next: data => {
          this.availableSeats = data;
          this.groupedSeats = this.groupSeatsByRow(this.availableSeats);
          this.seatRows = Object.keys(this.groupedSeats).sort(); // A, B, C...
        },
        error: err => alert('Error al cargar asientos disponibles')
      });
    }
  }

  toggleSeat(seat: string) {
    if (this.selectedSeats.includes(seat)) {
      this.selectedSeats = this.selectedSeats.filter(s => s !== seat);
    } else {
      this.selectedSeats.push(seat);
    }
  }

  groupSeatsByRow(seats: string[]): { [key: string]: string[] } {
    const grouped: { [key: string]: string[] } = {};

    seats.forEach(seat => {
      const row = seat.charAt(0).toUpperCase(); // A, B, C...
      if (!grouped[row]) {
        grouped[row] = [];
      }
      grouped[row].push(seat);
    });

    // Ordenar asientos dentro de cada fila
    for (let row in grouped) {
      grouped[row].sort((a, b) => {
        const numA = parseInt(a.slice(1));
        const numB = parseInt(b.slice(1));
        return numA - numB;
      });
    }

    return grouped;
  }
}
