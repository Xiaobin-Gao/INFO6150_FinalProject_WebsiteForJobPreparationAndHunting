import { Component, OnInit,Input} from '@angular/core';
import {CompanyPage} from '../companies/companiesPage.model';
import {Interview} from '../interview-one/intweview.model';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-interview-create',
  templateUrl: './interview-create.component.html',
  styleUrls: ['./interview-create.component.css']
})
export class InterviewCreateComponent implements OnInit {

  @Input() company:CompanyPage;

  model:any = {};
  countNum:number =0;
  constructor(private routerinfo:ActivatedRoute) {
 
   }

  ngOnInit() {
  }
  onclickDisplay(formdiv,showdiv){
    formdiv.style.display="none"
    showdiv.style.display=""
  }

}
