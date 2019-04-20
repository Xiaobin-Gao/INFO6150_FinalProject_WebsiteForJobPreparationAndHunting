import { Component, OnInit ,Input} from '@angular/core';
import {Interview} from './intweview.model';

@Component({
  selector: 'app-interview-one',
  templateUrl: './interview-one.component.html',
  styleUrls: ['./interview-one.component.css']
})
export class InterviewOneComponent implements OnInit {

  @Input() interview: Interview;

  constructor() { }

  ngOnInit() {
  }

}
