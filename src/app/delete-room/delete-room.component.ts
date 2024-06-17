import { Component } from '@angular/core';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.css']
})
export class DeleteRoomComponent {
  roomNumber: string = '';
  room: any = null;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private roomService: RoomService) {}

  onSearch() {
    this.roomService.getRoomDetailsByRoomNumber(this.roomNumber).subscribe(
      (data) => {
        this.room = data;
        this.errorMessage = '';
        this.successMessage = '';
      },
      (error) => {
        this.errorMessage = 'Room not found';
        this.room = null;
        this.successMessage = '';
      }
    );
  }

  onDelete() {
    this.roomService.deleteRoom(this.roomNumber).subscribe(
      (response) => {
        this.successMessage = 'Room deleted successfully.';
        this.errorMessage = '';
        this.room = null;
        this.roomNumber = '';
      },
      (error) => {
        this.errorMessage = 'Error deleting room. Please try again later.';
        this.successMessage = '';
      }
    );
  }
}
