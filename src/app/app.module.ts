import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RoomAddedComponent } from './room-added/room-added.component';
import { ViewRoomComponent } from './view-room/view-room.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { DeleteRoomComponent } from './delete-room/delete-room.component';
import { PaymentComponent } from './payment/payment.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { AboutComponent } from './about/about.component';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { ComplaintDetailsComponent } from './complaint-details/complaint-details.component';
import { ComplaintSubmittedComponent } from './complaint-submitted/complaint-submitted.component';
import { PaymentService } from './payment/payement.service';
import { UpdateRoomComponent } from './update-room/update-room.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRoomComponent,
    HomeComponent,
    LoginComponent,
    RoomAddedComponent,
    NavbarComponent,
    ViewRoomComponent,
    PaymentComponent,
    ComplaintComponent,
    AboutComponent,
    DeleteRoomComponent,
    ComplaintFormComponent,
    ComplaintDetailsComponent,
    ComplaintSubmittedComponent,
    UpdateRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
