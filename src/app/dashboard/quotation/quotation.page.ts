import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.page.html',
  styleUrls: ['./quotation.page.scss'],
})
export class QuotationPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onChange(e) {
    const selectValue = e.target.value;
    if(selectValue === 'individual')
      this.navCtrl.navigateForward('/travel-individual');
    else if(selectValue === 'family')
      this.navCtrl.navigateForward('/travel-family');
    else if(selectValue === 'group')
      this.navCtrl.navigateForward('/travel-group');
  }

}
