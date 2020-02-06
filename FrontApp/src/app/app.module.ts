import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ CommonModule} from '@angular/common';
import { MeetingComponent } from './meeting/meeting.component';
import MeetingService from './meeting/meeting.services';
import { AddeditmeetingComponent } from './meeting/addeditmeeting/addeditmeeting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import { AttendeereportComponent } from './report/attendeereport/attendeereport.component';


@NgModule({
  declarations: [
    AppComponent,
    MeetingComponent,
    AddeditmeetingComponent,
    LoginComponent,
    AttendeereportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [
    MeetingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
