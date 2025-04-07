import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoomService} from '../../../../services/room/room.service';
import {Room} from '../../../../models/room/room.model';

@Component({
  selector: 'app-room-list',
  imports: [CommonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.scss'
})
export class RoomListComponent implements OnInit {
  private roomService = inject(RoomService);

  rooms: Room[] = [];

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe({
      next: (data) => this.rooms = data,
      error: () => alert('Error al cargar las salas'),
    });
  }
}
