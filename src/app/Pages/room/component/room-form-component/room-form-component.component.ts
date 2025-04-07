import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Room} from '../../../../models/room/room.model';
import {RoomService} from '../../../../services/room/room.service';

@Component({
  selector: 'app-room-form-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './room-form-component.component.html',
  styleUrl: './room-form-component.component.scss'
})
export class RoomFormComponent {
  private roomService = inject(RoomService);

  room: Room = {
    nameDto: '',
    capacityDto: 0
  };

  onSubmit() {
    this.roomService.createRoom(this.room).subscribe({
      next: () => {
        alert('Sala registrada con éxito');
        this.room = { idRoomDto: 0, nameDto: '', capacityDto: 0 };
      },
      error: () => alert('Error al registrar la sala'),
    });
  }
}
