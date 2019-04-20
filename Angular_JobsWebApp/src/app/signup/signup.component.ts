import { Component, OnInit , TemplateRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../service/user.service';
import {NgbModal, NgbActiveModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('content')
  private cannotSignUp: TemplateRef<any>;
  model: any = {};
  constructor(private userService: UserService, private router: Router, public modalService: NgbModal) { }
  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.modalService.open(this.cannotSignUp, {
      }).result.then((result) => {
        this.router.navigate(['/home']);
      });
    }
  }

  creteUser(content, fName, lName, email, password): boolean {
    if(fName.errors || lName.errors || email.errors || password.errors)
      return false;
    this.userService.create(this.model)
      .subscribe(
        data => this.modalopen(content)
      );
    return true;
      
  }

  modalopen(content) {
    this.modalService.open(content, {
    }).result.then((result) => {
      this.router.navigate(['/home']);
    });
  }
}
