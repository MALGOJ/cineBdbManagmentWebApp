import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.common';
import { Room } from '../../models/room/room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private httpClient = inject(HttpClient);
  private readonly API_URL = `${environment.apiUrl}/rooms`;

  // CRUD
  getAllRooms() {
    return this.httpClient.get<Room[]>(this.API_URL);
  }

  getRoomById(id: number) {
    return this.httpClient.get<Room>(`${this.API_URL}/${id}`);
  }

  createRoom(room: Room) {
    return this.httpClient.post<Room>(this.API_URL, room);
  }

  updateRoom(id: number, room: Room) {
    return this.httpClient.put<Room>(`${this.API_URL}/${id}`, room);
  }

  deleteRoom(id: number) {
    return this.httpClient.delete<void>(`${this.API_URL}/${id}`);
  }

  // Métodos específicos
  getAvailableRooms(schedule: string) {
    return this.httpClient.get<Room[]>(`${this.API_URL}/available?schedule=${schedule}`);
  }

  getRoomsByMinCapacity(minCapacity: number) {
    return this.httpClient.get<Room[]>(`${this.API_URL}/min-capacity/${minCapacity}`);
  }
}
