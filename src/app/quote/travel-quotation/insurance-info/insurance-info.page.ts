import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { QuoteService } from '../../quote.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-insurance-info',
  templateUrl: './insurance-info.page.html',
  styleUrls: ['./insurance-info.page.scss'],
})
export class InsuranceInfoPage implements OnInit, OnDestroy {
  title: string;
  isShow: string = 'covers';
  totalPrice: number = 0;
  totalPriceSub: Subscription;
  form: FormGroup;
  EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  covers = [
    {
      title: 'list 1', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur debitis, neque dignissimos fuga laudantium quia nostrum illum inventore magnam ducimus. Eveniet, esse! Error doloremque at veniam illum nesciunt rerum quasi?'
    },
    {
      title: 'list 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur debitis, neque dignissimos fuga laudantium quia nostrum illum '
    }
  ];
  constructor(
    private translate: TranslateService,
    private quoteService: QuoteService
  ) { 
    // this.covers[0].open = true;
  }

  ngOnInit() {
    this.translate.get('info').subscribe(async (text) => {
      this.title = await text.covers
    }); 
    //traveler_info
    //get total price
    const dataForm = this.quoteService.dataIndivdual;
    this.totalPriceSub = this.quoteService._totalPrice.subscribe((res) => {
      this.totalPrice = res;
    });
    this.quoteService.getQuoteIndividual(dataForm);

    //create form
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      nationality: new FormControl('egyptian', {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      firstName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(3)]
      }),
      middleName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(3)]
      }),
      lastName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(3)]
      }),
      gender: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dob: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.pattern(this.EMAIL_REGEXP)]
      }),
      phoneNumber: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required,  Validators.pattern('[0-9]{11}')]
      }),
      nationalityId: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required,  Validators.pattern('[a-zA-Z0-9]{14}')]
      }),
      id: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required,  Validators.pattern('[a-zA-Z0-9]{14}')]
      }),
      address: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(3)]
      }),
      payment: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      terms: new FormControl(true, {
        updateOn: 'blur',
        validators: [Validators.pattern('true')]
      }),
      chk: new FormControl(true, {
        updateOn: 'blur',
        validators: [Validators.pattern('true')]
      }),
      condition: new FormControl(true, {
        updateOn: 'blur',
        validators: [Validators.pattern('true')]
      }),

    })
  }


  goInfo() {
    this.isShow = 'info';
    this.translate.get('info').subscribe(async (text) => {
      this.title = await text.traveler_info
    }); 
   
  }

  backCover() {
    this.isShow = 'covers';
    this.translate.get('info').subscribe(async (text) => {
      this.title = await text.covers
    }); 
    // this.title = 'Covers';
  }

  backInfo() {
    this.isShow = 'info';
    this.translate.get('info').subscribe(async (text) => {
      this.title = await text.traveler_info
    }); 
    // this.title = 'Traveler Info';
  }

  goThankyou() {
    console.log(this.form.value);

    this.isShow = 'thankyou';
    this.translate.get('info').subscribe(async (text) => {
      this.title = await text.protected
    }); 
   
  }

  ngOnDestroy() {
    if(this.totalPriceSub) this.totalPriceSub.unsubscribe();
  }
}
