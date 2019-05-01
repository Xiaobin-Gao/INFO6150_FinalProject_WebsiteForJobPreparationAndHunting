import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { JobServiceService } from '../service/job-service.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { job } from '../model/job.model'



@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {
  model: any = {};
  message: any;
  _job : job;
  jobList:job[];

  constructor(private userService: UserService, private JobServiceService: JobServiceService, private router: Router, public modalService: NgbModal) { }

  ngOnInit() {
  }



  onSubmit(f) {
    //console.log(f.value.searchText); 
    var term =  f.value.searchText;
      this.router.navigate(['/displayTable'], { queryParams: { term: term } });
  }

}
