import { Component, OnInit } from '@angular/core';
import MeetingService from './meeting.services';
import { Router } from '@angular/router';
import {DatePipe} from '@angular/common'


@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
 
  meetings:any;
  router: Router;
  pipe = new DatePipe('en-US'); 
  constructor(private meetingService:MeetingService) { }

  ngOnInit() {
    debugger;
    this.meetingService.getAll().subscribe((data)=> { this.meetings=data; }) 

  }

  updateMeeting(meetingId:number) {
    this.router.navigate(["/addedit"]);

  }
  onDelete(meetingId:number) {
    if(confirm('Are you sure to delete this meeting?')){
    this.meetingService.delete(meetingId).subscribe((d)=> { 
      this.meetingService.getAll().subscribe((data)=> { this.meetings=data; })
     })
    }
  }
  
}
