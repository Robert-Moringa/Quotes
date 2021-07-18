import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import { EventEmitter } from 'stream';

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

  constructor() { }

  ngOnInit(): void {
  }

}
