import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuoteService } from 'src/app/quote/quote.service';

@Component({
  selector: 'app-traveler-info',
  templateUrl: './traveler-info.component.html',
  styleUrls: ['./traveler-info.component.scss'],
})
export class TravelerInfoComponent implements OnInit {
  @Input('form') form: FormGroup;
  maxDate: string;
  constructor(
    private quoteService: QuoteService
  ) { }

  ngOnInit() {
    this.maxDate = this.quoteService.convertDate(this.quoteService.getDateBefore30Days());
  }

}
