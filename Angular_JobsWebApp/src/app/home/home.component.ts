import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Article } from '../hot-news/news.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    articles: Article[];

  userObject: object;
  currentUser: string;
  currentUserLastName: string;
  currentUserEmail: string;
  currentUserType: String;
    constructor(private router: Router, public modalService: NgbModal) {this.articles = [
      new Article('Amazon Cancels HQ2 Plans in New York City', 
      'Amazon is abandoning plans for a headquarters in New York City after facing resistance from local politicians who objected to billions of dollars in tax incentives. Amazon spent a year conducting a public search for a second headquarters and planned to create 25,000 jobs and invest $2.5 billion in New York’s Long Island City neighborhood...', 
      '',
      '../../assets/a.jpg',
      113),
      new Article('Vimeo CEO Anjali Sud: How I Work', 
      'Vimeo CEO Anjali Sud talks to The Wall Street Journal about the best way to ask for a promotion, how to say "no," and cultivating inspiration from her team...',
      '',
      '../../assets/b.jpg',
      92),
      new Article('United Technologies CDO Backs Effort to Train Female Coders', 
      'The multiyear commitment of more than $1 million will help Girls Who Code expand its computer science training programs in the U.S., and, in turn, increase the pool of female technologists from which to hire, said Vince Campisi, senior vice president and chief digital officer of United Technologies...', 
      '',
      '../../assets/c.jpg',
      71),
      ]; 

      this.router.routeReuseStrategy.shouldReuseRoute = () =>  {
        return false;
      };
    }

    sortedArticles(): Article[] {
      return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    }
    
    ngOnInit() {
      this.userObject = JSON.parse(localStorage.getItem('user'));
    if (this.userObject != null) {
      this.currentUser = this.userObject['firstName'];
      this.currentUserLastName = this.userObject['lastName'];
      this.currentUserEmail = this.userObject['userName'];
      this.currentUserType=this.userObject['type'];
    }
    }
}
