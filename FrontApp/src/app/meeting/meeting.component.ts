import { Component, OnInit } from '@angular/core';
import MeetingService from './meeting.services';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
 
  meetings:any;
  constructor(private meetingService:MeetingService) { }

  ngOnInit() {
    debugger;
    this.meetingService.getAll().subscribe((data)=> { this.meetings=data; }) 

  }
}
