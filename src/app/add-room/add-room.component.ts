import { Component } from '@angular/core';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent {
  room = {
    student_name: '',
    rollno: '',
    year: '',
    department: '',
    room_number: ''
  };
  errorMessage: string | null = null;

  constructor(private roomService: RoomService) {}

  addRoom(): void {
    this.roomService.addRoom(this.room).subscribe(
      response => {
        console.log('Room added successfully:', response);
        this.errorMessage = null;
      },
      error => {
        console.error('Error adding room:', error);
        this.errorMessage = 'Error adding room. Please try again later.';
      }
    );
  }

  onSubmit(): void {
    this.addRoom();
  }
}
