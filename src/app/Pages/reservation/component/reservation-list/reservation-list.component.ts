import {Component, Input, OnInit} from '@angular/core';
import {ReservationService} from '../../../../services/reservation/reservation.service';
import {Reservation} from '../../../../models/reservation/reservation.model';
import {CommonModule, DatePipe} from '@angular/common';

@Component({
  selector: 'app-reservation-list',
  imports: [
    DatePipe,
    CommonModule

  ],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.scss'
})
export class ReservationListComponent implements OnInit {
  @Input() reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit() {
    this.reservationService.getAllReservations().subscribe({
      next: data => this.reservations = data,
      error: err => alert('Error al obtener las reservas')
    });
  }
}
