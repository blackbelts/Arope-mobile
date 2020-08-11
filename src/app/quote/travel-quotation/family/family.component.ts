import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../quote.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import {AdditionalTravelersComponent} from '../components/additional-travelers/additional-travelers.component';
@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
})
export class FamilyComponent implements OnInit {
  form: FormGroup;
  zones: any[];
  periods: any[];
  listDates: string;
  constructor(private quoteService: QuoteService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.zones = this.quoteService.Zones;
    this.periods = this.quoteService.Periods;
    this.createForm();
  }


  createForm() {
    this.form = new FormGroup({
      zone: new FormControl('', [Validators.required]),
      coverageFrom: new FormControl('', [Validators.required]),
      period: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      coverageTo: new FormControl('', [Validators.required]),
      check: new FormControl(false, [Validators.required])
    });
  }

  onOpenAdditionTravelers() {
    
    this.modalCtrl
    .create({
      component: AdditionalTravelersComponent,
      componentProps: {  selectedMode: 'family' }
    })
    .then(modalCreate => {
      modalCreate.present();
      return modalCreate.onDidDismiss();
    })
    .then(modalDismiss => {
      console.log(modalDismiss.data, modalDismiss.role);
      let arr = [];
      modalDismiss.data.map(el => {
        arr.push(el.dob);
      });
      if (modalDismiss.role === "confirm") {
        console.log("Booked");
      }

      this.listDates = arr.join(', ');
    });
  }

}
