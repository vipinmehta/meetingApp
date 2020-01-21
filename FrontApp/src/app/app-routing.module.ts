import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingComponent } from './meeting/meeting.component';
import { AddeditmeetingComponent } from './meeting/addeditmeeting/addeditmeeting.component';


const routes: Routes = [
  {
    path:'meeting', component:MeetingComponent

  },
  {
    path:'addedit',component:AddeditmeetingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
