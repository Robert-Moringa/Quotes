import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  constructor() { }

  quotes: Quote[]= [
    new Quote('Robert Maina', 'The way to get started is to quit talking and begin doing.', 'Walt Disney')
  ];

  
  addNewQuote(quote: Quote) {
    
  }



  ngOnInit(): void {
  }

}
