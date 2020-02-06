import { Component, OnInit } from '@angular/core';
import { Meeting } from '../meeting.model';
import MeetingService from '../meeting.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-addeditmeeting',
  templateUrl: './addeditmeeting.component.html',
  styleUrls: ['./addeditmeeting.component.css']
})
export class AddeditmeetingComponent implements OnInit {
  meetingId: string;
  sub: any;
  meeting: any;
  constructor(
    private meetingService: MeetingService,
    private router: Router,
    private route: ActivatedRoute) {

    this.meeting = new Meeting();
  }

  ngOnInit() {
    debugger;
    this.route.params.subscribe(params => this.meetingId = params['id']);
    this.meetingService.get(this.meetingId) .subscribe((response) => {
      this.meeting=response;
    })
    // setTimeout(function () { 
    //     this.meeting= this.meetingService.get('2');
    // }, 3000);
    

  }

  onSave() {
    this.meetingService.save(this.meeting)
      .subscribe((response) => {
        this.router.navigate(['/meeting']);
      })
  }

  goBack() {
    this.router.navigate(["/meeting"]);
  }

}
