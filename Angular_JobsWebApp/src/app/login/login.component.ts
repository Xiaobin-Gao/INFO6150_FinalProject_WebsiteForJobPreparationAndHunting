import { Component, AfterViewInit, OnInit} from '@angular/core';
import { UserService } from '../service/user.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  message: any;
  model: any = {};
  constructor(private userService: UserService, private router: Router, public modalService: NgbModal) { }
  ngOnInit() {
  }

  onSubmit() {
    this.userService.getUser(this.model)
      .subscribe(
        data => {
          localStorage.setItem('user', JSON.stringify(data['user']));
          this.router.navigate(['/home']);
        },
        error => {this.message = {type : 'error', text : 'Invalid username or password.'}; }
      );
  }
}
