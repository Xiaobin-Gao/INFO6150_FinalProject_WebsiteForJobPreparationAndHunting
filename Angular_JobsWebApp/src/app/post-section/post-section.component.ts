import { Component, OnInit , TemplateRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { JobServiceService } from '../service/job-service.service';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-post-section',
  templateUrl: './post-section.component.html',
  styleUrls: ['./post-section.component.css']
})
export class PostSectionComponent implements OnInit {

  test: string = '';
  

  @ViewChild('content')
  model: any = {};
  constructor(private jobService: JobServiceService, private router: Router, public modalService: NgbModal) { }
  ngOnInit() {

  }

  creteJob(content): boolean {
    this.modalopen(content)
    return true;
  }

  modalopen(content) {
    this.modalService.open(content, {
    }).result.then((result) => {
      this.router.navigate(['#']);
    });
  }

  showPostJobForm(obj) {
    if(obj.style.display == 'none')
        obj.style.display = '';
    else obj.style.display = 'none';
  }
}

