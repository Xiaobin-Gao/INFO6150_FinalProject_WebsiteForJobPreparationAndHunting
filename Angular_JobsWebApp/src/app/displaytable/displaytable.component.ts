import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { JobServiceService } from '../service/job-service.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { job } from '../model/job.model';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-displaytable',
  templateUrl: './displaytable.component.html',
//   styleUrls: ['./displaytable.component.css']
})
export class DisplaytableComponent implements OnInit {
  model: any = {};
  message: any;
  _job : job;
  jobList:job[];
  term:string;


  constructor(private userService: UserService, private JobServiceService: JobServiceService, private router: Router, public modalService: NgbModal, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams
      .filter(params => params.term)
      .subscribe(params => {
        //console.log(params); // {order: "popular"}

        this.term = params.term;
        ; // popular
      });
//console.log(this.term)
    this.onSubmit(this.term);
  }



  onSubmit(term){
    console.log("funstion search triggered");
    let searchParam = JSON.stringify(this.model);
    //console.log(this.JobServiceService.searchTerm);

    this.JobServiceService.getUser(term)
    .subscribe
    (
      data => {
        
        this.jobList = data;
        this._job = data[1];
        console.log(this.jobList);
        if (this.jobList === undefined || this.jobList.length == 0){
        document.getElementById("error").innerHTML = "No data found"
    }
        
      },
      error => {this.message = {type : 'error', text : 'No data found'}; }
    )

    
  }

  
}
