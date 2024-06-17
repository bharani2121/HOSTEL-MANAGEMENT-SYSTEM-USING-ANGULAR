import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent {
  complaint = {
    name: '',
    rollno: '',
    roomno: '',
    mobileno: '',
    gmail: '',
    details: ''
  };
  successMessage = '';

  constructor(private roomService: RoomService, private router: Router) {}

  onSubmit() {
    this.roomService.addComplaint(this.complaint).subscribe(
      response => {
        console.log('Complaint submitted successfully:', response);
        this.successMessage = 'Complaint submitted successfully!';
        // Optionally navigate to a success page
        // this.router.navigate(['/complaint-submitted']);
        this.complaint = {  // Clear the form after successful submission
          name: '',
          rollno: '',
          roomno: '',
          mobileno: '',
          gmail: '',
          details: ''
        };
      },
      error => {
        console.error('Error submitting complaint:', error);
        // Optionally handle error, e.g., display an error message
      }
    );
  }
}
