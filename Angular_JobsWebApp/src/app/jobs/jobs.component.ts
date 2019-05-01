import { Component, OnInit , TemplateRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {UserService } from '../service/user.service';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
//   styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  private cannotSignUp: TemplateRef<any>;
  model: any = {};
  constructor(private userService: UserService, private router: Router, public modalService: NgbModal) { }

  ngOnInit() {
  }

}
