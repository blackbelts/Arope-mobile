import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  loadingChangedStatus = new Subject<boolean>();

  constructor(private toastCtrl: ToastController) {}

  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}