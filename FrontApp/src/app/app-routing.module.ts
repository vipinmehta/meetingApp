import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingComponent } from './meeting/meeting.component';
import { AddeditmeetingComponent } from './meeting/addeditmeeting/addeditmeeting.component';
import { LoginComponent } from './user/login/login.component';
import { AttendeereportComponent } from './report/attendeereport/attendeereport.component';


const routes: Routes = [
  {
    path:'meeting', component:MeetingComponent

  },
  {
    path:'login', component:LoginComponent

  },
  {
    path:'addedit/:id',component:AddeditmeetingComponent
  }
  ,
  {
    path:'addedit',component:AddeditmeetingComponent
  }
  ,
  {
    path:'report',component:AttendeereportComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
