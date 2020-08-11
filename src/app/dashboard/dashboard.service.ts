import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Subject, BehaviorSubject } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private _url_target = 'http://207.154.195.214:5000/api/call_method/';
  _dashboardSubLoad: Subject<any[]> = new  Subject<any[]>();
  _policiesLoad: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private _loadCollections: any[] = [
    {
      policy: 'abc',
      customer: '	Azure Interior, Colleen Diaz',
      collection_date: '07/05/2020'
    },
    {
      policy: 'xyz',
      customer: '	Azure Interior, Colleen Diaz',
      collection_date: '07/10/2020'
    }
  ];
  _renwalsLoading: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
    constructor(
    private http: HttpClient,
    private storage: Storage,
    private router: Router
    ) { }

    get collections() {
      return this._loadCollections;
    }

    get plicies() {
      return this._policiesLoad.asObservable();
    }

    get renewals() {
      return this._renwalsLoading.asObservable();
    }
    
    getStorageuserId() {
      return this.storage.get('user').then(value =>  value.userID);
    }
    
    getStorageDataToken() {
      return this.storage.get('user').then(value =>  value.token);
    }
    
    
    async get_dashboard_info() {
      let token: string = await this.getStorageDataToken();
      let userId: number = await this.getStorageuserId();

      const newData = {paramlist: {
        paramlist: {
          data: Number(userId)
        }
      }};
      
      let header: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer '+token);

      await this.http.post(this._url_target+'arope.broker/get_dashboard', JSON.stringify(newData), {headers: header})
      .subscribe(async (response) => {
       this._dashboardSubLoad.next(await response['value']);
      }, (err) => {
        console.log(err, 'err');
      });
    }

    async get_collection_info() {
      let token: string = await this.getStorageDataToken();
      let userId: number = await this.getStorageuserId();

      const newData = {paramlist: {
        paramlist: {
          data: Number(userId)
        }
      }};
      
      let header: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer '+token);

      await this.http.post(this._url_target+'arope.broker/get_collection', JSON.stringify(newData), {headers: header})
      .subscribe(async (response) => {
      //  this._dashboardSubLoad.next(await response['value']);
      }, (err) => {
        console.log(err, 'err');
      });
    }

    

    async fetchPolicies(ids: number[]) {
      let token: string = await this.getStorageDataToken();
      let userId: number = await this.getStorageuserId();

      let header: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer '+token);
      const data = {
        paramlist: {
          paramlist: {
            filter: [['id', 'in', ids]], need: []
          }
        }
      };
      return this.http.post<{authData:{}, value: []}>(this._url_target+'collection.arope/search_read', JSON.stringify(data), {headers: header})
      .subscribe(resData => {
        this._policiesLoad.next(resData.value);
        this.router.navigate(['/', 'dashboard', 'yourdashboard', 'collections']);

      });
    }
    

    async fetchRenewals(ids: number[]) {
      let token: string = await this.getStorageDataToken();
      let userId: number = await this.getStorageuserId();

      let header: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer '+token);
      const data = {
        paramlist: {
          paramlist: {
            filter: [['id', 'in', ids]], need: []
          }
        }
      };
      return this.http.post<{authData:{}, value: []}>(this._url_target+'policy.arope/search_read', JSON.stringify(data), {headers: header})
      .pipe(take(1)).subscribe(resData => {
        this._renwalsLoading.next(resData.value);
       
        this.router.navigate(['/', 'dashboard', 'yourdashboard', 'renewals']);

      });
    }


    async fetchSurvey() {
      // survey.survey
      let token: string = await this.getStorageDataToken();

      let header: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer '+token);
      const data = {
        paramlist: {
          paramlist: {
            filter: [], need: []
          }
        }
      };
      return this.http.post(this._url_target+'survey.survey/search_read', JSON.stringify(data), {headers: header})
      .pipe(take(1)).subscribe(resData => {
        console.log(resData, 'res data');
      });
    }
}
