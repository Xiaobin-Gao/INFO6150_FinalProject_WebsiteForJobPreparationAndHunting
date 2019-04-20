import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {job} from '../model/job.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class JobServiceService {
  
  constructor(private http: HttpClient) { }
  getUser(searchParam):Observable<job[]> {
    console.log(searchParam);
    return this.http.get<job[]>('https://jobs.github.com/positions.json?description='+ searchParam);
  }


  create(job: job) {
    return this.http.post('http://localhost:3000' + '/job' , job );
  }

}
