import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  call_odoo_function(dbName, user, pass, modelName, functionName, data): Observable<any>  {
    const nwData = {paramlist: JSON.stringify(data)};
    const port = 6767;
    const odooUrl = 'http://207.154.195.214:4000/call_method' + '/' + port + '/' + dbName + '/' +
     user + '/' + pass + '/' + modelName + '/' + functionName;
    console.log('connected server');
    return this.http.post(odooUrl, nwData);
  }

  login_in_odoo(dbName, user, pass, modelName, functionName, data): Observable<any>  {
    const nwData = {paramlist: JSON.stringify(data)};
    const port = 6767;
    const odooUrl = 'http://207.154.195.214:4000/call_method' + '/' + port + '/' + dbName + '/' +
     user + '/' + pass + '/' + modelName + '/' + functionName;
    console.log('connected server');
    return this.http.post(odooUrl, nwData);
  }

  convertDate(dateAge) {
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
}

