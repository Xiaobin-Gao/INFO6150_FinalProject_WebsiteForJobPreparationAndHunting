import { Component, OnInit,Input } from '@angular/core';
import {CompanyPage} from '../companies/companiesPage.model';
import {Interview} from '../interview-one/intweview.model';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
//   styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {
  @Input() company:CompanyPage

  interviews:Interview[];;
  model:Interview;
  
  constructor() { 
    this.interviews=[
      new Interview('Project Manager',
      "Internship",
      "Google",
      "alice@gmail.com",
      80,
      "Accepted",
      "Postive",
      "Easy",
      "Application:I applied through college or university. The process took a week. I interviewed at exp Global in January 2016.Interview:Scheduled a Skype meeting with head electrical principal, talking about past internship experience and discussing about future job opportunity and benefits. It was relatively quick process as time flies while talking and discussing about the positions.Interview Questions:Reason for choosing to study building power distribution ",
      ),
      new Interview('Architectural Designer',
      "Full-time",
      "Amazon",
      "ben@gmail.com",
      50,
      "Rejected",
      "Netual",
      "Average",
      "Application:I applied through college or university. The process took a week. I interviewed at exp Global in January 2016.Interview:Scheduled a Skype meeting with head electrical principal, talking about past internship experience and discussing about future job opportunity and benefits. It was relatively quick process as time flies while talking and discussing about the positions.Interview Questions:Reason for choosing to study building power distribution ",
      ),
      new Interview('Electrical Engineer ',
      "Part-time",
      "Apple",
      "alice@gmail.com",
      20,
      "No",
      "Passive",
      "Difficult",
      "Application:I applied through college or university. The process took a week. I interviewed at exp Global in January 2016.Interview:Scheduled a Skype meeting with head electrical principal, talking about past internship experience and discussing about future job opportunity and benefits. It was relatively quick process as time flies while talking and discussing about the positions.Interview Questions:Reason for choosing to study building power distribution ",
      ),

    ]
  }

  ngOnInit() {
  }

}
