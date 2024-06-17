import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AddRoomComponent } from './add-room/add-room.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoomAddedComponent } from './room-added/room-added.component';
import { ViewRoomComponent } from './view-room/view-room.component';
import { DeleteRoomComponent } from './delete-room/delete-room.component';
import { PaymentComponent } from './payment/payment.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { ComplaintDetailsComponent } from './complaint-details/complaint-details.component';
import { ComplaintSubmittedComponent } from './complaint-submitted/complaint-submitted.component';
import { AboutComponent } from './about/about.component';
import { UpdateRoomComponent } from './update-room/update-room.component'; // Import the new component


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-room', component: AddRoomComponent },
  { path: 'view-room', component: ViewRoomComponent },
  { path: 'room-added', component: RoomAddedComponent },
  { path: 'delete-room', component: DeleteRoomComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'complaint', component: ComplaintComponent },
  { path: 'complaint-form', component: ComplaintFormComponent },
  { path: 'complaint-details', component: ComplaintDetailsComponent },
  { path: 'complaint-submitted', component: ComplaintSubmittedComponent },
  { path: 'about', component: AboutComponent },
  { path: 'update-room', component: UpdateRoomComponent }, // Add route for update room
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' } // Wildcard route for 404 handling
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
