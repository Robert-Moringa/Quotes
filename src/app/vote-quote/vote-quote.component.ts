import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-quote',
  templateUrl: './vote-quote.component.html',
  styleUrls: ['./vote-quote.component.css']
})
export class VoteQuoteComponent implements OnInit {

  votes: number= 0;

  upVote() {
    this.votes++;
  }
  downVote() {
    this.votes--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
