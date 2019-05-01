import { Component, OnInit, HostBinding, Input } from '@angular/core';

import { Article } from './news.model';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
//   styleUrls: ['./hot-news.component.css']
})
export class HotNewsComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row'; votes: number;
  @Input() article: Article;

  constructor() {}

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
