import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuoteService } from '../quote.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Storage } from '@ionic/storage';
import { SharedService } from 'src/app/shared/shared.service';
import { UIService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-travel-quotation',
  templateUrl: './travel-quotation.page.html',
  styleUrls: ['./travel-quotation.page.scss'],
})
export class TravelQuotationPage implements OnInit {
  title: string;
  isShow: string = 'individual';
  form:FormGroup;
  isLoading: boolean = false;
  constructor(
    private navCtrl: NavController,
    private translate: TranslateService,
    private quoteService: QuoteService,
    private auth: AuthService,
    private storage: Storage,
    private sharedService: SharedService,
    private uiService: UIService
  ) { }

  ngOnInit() {
    this.translate.get('travel').subscribe(async (text) => {
      this.title = await text.title;
    });

    this.createForm();

   this.uiService.loadingChangedStatus.subscribe(res => {
      this.isLoading = res;
    });
  }

  onChange(event):void {
    const targetValue = event.target.value;
    this.isShow = targetValue;
  }

  onClick() {
    // this.navCtrl.navigateForward('/travel-quotation/insurance-info');
  }

  createForm() {
    this.form = new FormGroup({
      zone: new FormControl('', [Validators.required]),
      coverageFrom: new FormControl('', [Validators.required]),
      period: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      coverageTo: new FormControl('', [Validators.required]),
      check: new FormControl(true, Validators.pattern('true'))
    });
  }

  onSubmit() {
    console.log(this.form.value);
    const data = {
      paramlist: {
        data: {
          z: this.form.value['zone'].trim(),
          d: [this.sharedService.convertDate(this.form.value['dob'])],
          p_from: this.sharedService.convertDate(this.form.value['coverageFrom']),
          p_to: this.form.value['coverageTo']
        }
      }
    }

    console.log(data, 'befor go');
    this.storage.get('user').then(value => {
      console.log(value, 'storage');
    });
    // this.navCtrl.navigateForward('/travel-quotation/insurance-info');
    this.quoteService.getQuoteIndividual(data);

  }
}
