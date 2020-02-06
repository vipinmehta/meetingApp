import { Component, OnInit } from '@angular/core';
import MeetingService from 'src/app/meeting/meeting.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendeereport',
  templateUrl: './attendeereport.component.html',
  styleUrls: ['./attendeereport.component.css']
})
export class AttendeereportComponent implements OnInit {
  userMeetings:any;

  constructor(private meetingService:MeetingService,private router: Router,) { }

  ngOnInit() {
    this.meetingService.getUserMeetings().subscribe((data)=> { this.userMeetings=data; }) 
    
  }

  goBack() {
    this.router.navigate(["/meeting"]);
  }

}
