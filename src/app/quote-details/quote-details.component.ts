import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import { EventEmitter } from 'stream';
import { VoteQuoteComponent } from '../vote-quote/vote-quote.component';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quotes: any;
  @Output() isDelete = new EventEmitter<boolean>();

  quoteDelete(doDelete: boolean){
    this.isDelete.emit(doDelete);
  }

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
