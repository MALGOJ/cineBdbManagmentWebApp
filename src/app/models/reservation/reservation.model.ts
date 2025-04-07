export interface Reservation {
  idReservationDto?: number;
  movieIdDto: number;
  roomIdDto: number;
  customerEmailDto: string;
  scheduleDto: Date;
  selectedSeatsDto: string[];
}
