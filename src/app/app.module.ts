import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';
import { TimeAgoPipe } from './time-ago.pipe';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { VoteQuoteComponent } from './vote-quote/vote-quote.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteFormComponent,
    TimeAgoPipe,
    QuoteDetailsComponent,
    VoteQuoteComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
