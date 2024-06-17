import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:3002/api/rooms';

  constructor(private http: HttpClient) {}

  // Method to add a room
  addRoom(room: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, room)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Method to get room details by room number
  getRoomDetailsByRoomNumber(roomNumber: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/roomNumber/${roomNumber}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Method to update room details
  updateRoom(room: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${room.room_number}`, room)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Method to delete a room by room number
  deleteRoom(roomNumber: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/roomNumber/${roomNumber}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Method to fetch all rooms
  getRooms(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Method to add a complaint
  addComplaint(complaint: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/complaints`, complaint)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error handling method
  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server-side error: ${error.status} ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
