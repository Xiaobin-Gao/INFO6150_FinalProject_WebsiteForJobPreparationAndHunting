import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {job} from '../model/job.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

	// public searchTerm: Observable<String> = "";

public searchVar;
  
  constructor(private http: HttpClient) { }
  getUser(searchParam):Observable<job[]> {
  	//searchParam = "Software";
  	// searchParam = this.searchVar;
    console.log("searchparam = "+searchParam);
    return this.http.get<job[]>('https://jobs.github.com/positions.json?description='+ searchParam);
  }
}
