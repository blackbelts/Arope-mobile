import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { QuoteService } from '../../quote.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss'],
})
export class IndividualComponent implements OnInit {
  zones: any[];
  periods: any[];
  @Input('form') form: FormGroup;
  maxDate: String;
  maxDateCoverageFrom: string;
  maxDateCoverageTo: string;

  constructor(
    private navCtrl: NavController, 
    private quoteService: QuoteService,
    private translateService: TranslateService
    ) { }

  ngOnInit() {
    const dateNow = Date.now();
   
    this.zones = this.quoteService.Zones;
    this.periods = this.quoteService.Periods;
    this.maxDate = this.quoteService.convertDate(this.quoteService.getDateBefore30Days());
    this.maxDateCoverageFrom = this.quoteService.convertDate(new Date(dateNow));
    // this.maxDateCoverageTo = this.quoteService.convertDate(this.coverageFrom);
  }

  onChangeCoverageFrom(ev) {
    this.maxDateCoverageTo = this.quoteService.convertDate(ev.target.value);
  }

  onChangePeriod(ev) {
    const dateFrom = this.form.value.coverageFrom;
    if(dateFrom) {
      const newDate = new Date(dateFrom);
      const dd = newDate.setDate(newDate.getDate() + parseInt(ev.target.value));
      this.form.controls['coverageTo'].setValue(this.quoteService.convertDate(new Date(dd)));
    } else {
      this.form.controls['period'].setValue(null);
      this.translateService.get('indi').subscribe(async (text) => {
       await this.quoteService.presentToast(text.alert);
      });
    }
  }
  

}
