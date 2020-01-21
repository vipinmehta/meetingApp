import { Component, OnInit } from '@angular/core';
import { Meeting } from '../meeting.model';
import MeetingService from '../meeting.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addeditmeeting',
  templateUrl: './addeditmeeting.component.html',
  styleUrls: ['./addeditmeeting.component.css']
})
export class AddeditmeetingComponent implements OnInit {
  meeting:Meeting;  
  constructor(private meetingService: MeetingService, private router: Router, private route: ActivatedRoute) { 
    this.meeting=new Meeting();
  }

  ngOnInit() {
    debugger;
    this.route.params.subscribe( params => console.log(params['íd']) );

  }

  onSave(){
    this.meetingService.save(this.meeting)
    .subscribe((response)=>{
      this.router.navigate(['/meeting']);
    })
  }

}
