import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { JobServiceService } from '../service/job-service.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { job } from '../model/job.model'

@Component({
  selector: 'app-displaytable',
  templateUrl: './displaytable.component.html',
  styleUrls: ['./displaytable.component.css']
})
export class DisplaytableComponent implements OnInit {
  model: any = {};
  message: any;
  _job : job;
  jobList:job[];

  constructor(private userService: UserService, private JobServiceService: JobServiceService, private router: Router, public modalService: NgbModal) { }

  ngOnInit() {
    this.onSubmit();
  }

  onSubmit(){
    console.log("funstion search triggered");
    let searchParam = JSON.stringify(this.model);
    this.JobServiceService.getUser("intern")
    .subscribe
    (
      data => {
        
        this.jobList =data;
        this._job = data[1];
        console.log(this.jobList);
        
      },
      error => {this.message = {type : 'error', text : 'No data found'}; }
    )
    
  }
}
