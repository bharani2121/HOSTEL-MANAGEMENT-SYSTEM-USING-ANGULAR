import { Component } from '@angular/core';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent {
  roomNumber: string = '';
  roomDetails: any = null;
  errorMessage: string = '';
  updateSuccess: boolean = false;

  constructor(private roomService: RoomService) {}

  fetchRoomDetails() {
    this.roomService.getRoomDetailsByRoomNumber(this.roomNumber).subscribe(
      data => {
        this.roomDetails = data;
        this.errorMessage = '';
        this.updateSuccess = false;
      },
      error => {
        this.errorMessage = 'Room not found';
        this.roomDetails = null;
        this.updateSuccess = false;
      }
    );
  }

  updateRoom() {
    if (this.roomDetails) {
      this.roomService.updateRoom(this.roomDetails).subscribe(
        response => {
          console.log('Room updated successfully:', response);
          this.errorMessage = '';
          this.updateSuccess = true;
        },
        error => {
          console.error('Error updating room:', error);
          this.errorMessage = 'Error updating room. Please try again.';
          this.updateSuccess = false;
        }
      );
    }
  }
}
