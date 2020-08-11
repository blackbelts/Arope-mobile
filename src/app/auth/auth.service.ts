import { Injectable } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UIService } from '../shared/ui.service';
import { Storage } from '@ionic/storage';

interface User {
  userID: string;
  token: string;
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _user = new Subject<User>();
  private _isAuthenctedStatus = false;
  private _userID = 'abc';
  private obj = {
    port: 7070,
    db: "arope-space01",
    username: "",
    password: ""
  };
  constructor(
    private odoo: SharedService, 
    private http: HttpClient,
    private toastCtrl: ToastController,
    private router:Router,
    private uiService: UIService,
    private storage:Storage
    
    ) { }

  get userID() {
    return this._userID;
  }

  get isAuthenticatedStatus() {
    return this._isAuthenctedStatus;
  }

  login(username, password) {
    const url = "http://207.154.195.214:5000/api/login";

    this.obj.username = username;
    this.obj.password = password; 

    let header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const object = JSON.stringify(this.obj);

    this.http.post(url, object, {headers: header}).subscribe((response: Response) => {
      let obj: User = {
        token: response['token'],
        userID: response['auth'].id
      }
      this.storage.set('user', obj);
      this._user.next(obj);
      this._isAuthenctedStatus = true;
      this.router.navigateByUrl("");

    },
    (err) => {
      this.uiService.presentToast('اسم المستخدم او كلمة المرور خطأ..!');
    }
    );
  }

  

  logout() {
    this._isAuthenctedStatus = false;
  }
}