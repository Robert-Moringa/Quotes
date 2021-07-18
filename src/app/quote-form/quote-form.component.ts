import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote('', '', '', new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  constructor() { }

  

  submitQuote(){
    this.addQuote.emit(this.newQuote)
    this.newQuote = new Quote('', '', '', new Date())
  }

  ngOnInit(): void {
  }

}
