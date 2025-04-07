import { Component } from '@angular/core';
import {NavbarComponent} from '../../layout/components/navbar/navbar.component';
import {ReservationFormComponent} from '../component/reservation-form/reservation-form.component';
import {SeatSelectionComponent} from '../component/seat-selection/seat-selection.component';
import {ReservationListComponent} from '../component/reservation-list/reservation-list.component';

@Component({
  selector: 'app-reservation-page',
  imports: [
    NavbarComponent,
    ReservationFormComponent,
    SeatSelectionComponent,
    ReservationListComponent
  ],
  templateUrl: './reservation-page.component.html',
  styleUrl: './reservation-page.component.scss'
})
export class ReservationPageComponent {

}
