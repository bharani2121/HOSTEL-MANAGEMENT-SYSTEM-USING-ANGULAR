import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.css']
})
export class ViewRoomComponent implements OnInit {
  rooms: any[] = []; // Assuming room data structure matches what your API returns
  errorMessage: string = ''; // Add this line

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.fetchRooms();
  }

  fetchRooms(): void {
    this.roomService.getRooms().subscribe(
      (data: any[]) => {
        this.rooms = data;
        console.log('Fetched rooms:', this.rooms);
      },
      (error) => {
        console.error('Error fetching rooms:', error);
        this.errorMessage = 'Error fetching rooms. Please try again later.';
      }
    );
  }
}
