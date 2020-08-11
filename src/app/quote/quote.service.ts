import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';
import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UIService } from '../shared/ui.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private zones = [
    {
      value: 'zone 1', viewValue: 'Worldwide excluding USA & CANADA'
    },
    {
      value: 'zone 2', viewValue: 'Europe'
    },
    {
      value: 'zone 3', viewValue: 'Worldwide'
    },
  ]
  private periods = [
    {
      value: '7', viewValue: '7 Days'
    },
    {
      value: '10', viewValue: '10 Days'
    },
    {
      value: '15', viewValue: '15 Days'
    },
    {
      value: '21', viewValue: '21 Days'
    },
    {
      value: '30', viewValue: '30 Days'
    }
  ];
  private types = [
    {
      value: 'supose',
      viewValue: 'Supose'
    },
    {
      value: 'kid',
      viewValue: 'Kid'
    }
  ]

  private _dataIndividual;
  _totalPrice: Subject<number> = new Subject<number>();
  _fetchCovers: Subject<any[]> = new Subject<any[]>();
  private _urlTarget: string = 'http://207.154.195.214:5000/api/call_method/';
  constructor(
    private toastController: ToastController,
    private storage: Storage,
    private http: HttpClient,
    private uiService: UIService,
    private router: Router
  ) { }

  get Zones() {
    return [...this.zones];
  }

  get Periods() {
    return [...this.periods];
  }

  get Types() {
    return [...this.types];
  }

  get dataIndivdual() {
    return this._dataIndividual;
  }

  set dataIndivdual(value) {
    this._dataIndividual = value;
  }

  get urlTarget() {
    return this._urlTarget;
  }

  getDateBefore30Days() {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() - 30);
    return minDate;
  }

  convertDate(dateAge: Date) {
    let d = new Date(dateAge),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    return [year, month, day].join('-');
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }




  getStorageData() {
    return this.storage.get('user').then(value =>  value.token);
  }

  async getQuoteIndividual(data) {
    this.uiService.loadingChangedStatus.next(true);
    this.dataIndivdual = data;
    let token: string = await this.getStorageData();
  
    const newData = {paramlist: this.dataIndivdual}
    let header: HttpHeaders = new HttpHeaders()
                                  .set('Content-Type', 'application/json')
                                  .set('Authorization', 'Bearer '+token);

    this.http.post(this.urlTarget+'travel.quotation/get_individual', JSON.stringify(newData), {headers: header})
              .subscribe((response) => {
                this.uiService.loadingChangedStatus.next(false);
                this._totalPrice.next(response['value'].gross);
                this.router.navigateByUrl('/travel-quotation/insurance-info');
              }, (err) => {
                console.log(err, 'err');
              });
  }


  async fetchCovers() {
    this.uiService.loadingChangedStatus.next(true);

    let token: string = await this.getStorageData();

    const data = {paramlist: {filter: [],
      need: ['ar_cover', 'ar_limit']}};
    const nwData = {paramlist: data};
    let header: HttpHeaders = new HttpHeaders()
                                .set('Content-Type', 'application/json')
                                .set('Authorization', 'Bearer '+token);

    this.http.post(this.urlTarget+'travel.benefits/search_read', nwData, {headers: header}).subscribe((response: any[]) => {
      let coversArr = [];
      console.log(response, 'res1');
      response = response['value'];
   
      for(let index in response) {
        
        let object = {
          cover: response[index].ar_cover,
          limit: response[index].ar_limit
        }

        coversArr.push(object);
      }

      console.log(coversArr);
      this._fetchCovers.next(coversArr);
      this.uiService.loadingChangedStatus.next(false);

    });
  }

}
