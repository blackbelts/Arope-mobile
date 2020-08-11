import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, NgForm } from '@angular/forms';
import { QuoteService } from 'src/app/quote/quote.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-additional-travelers',
  templateUrl: './additional-travelers.component.html',
  styleUrls: ['./additional-travelers.component.scss'],
})
export class AdditionalTravelersComponent implements OnInit {
  form: FormGroup;
  types: any[];
  items = new Array();
  constructor(private modalCtrl: ModalController, private fb: FormBuilder, private quoteService: QuoteService) { }

  ngOnInit() {
    this.createForm();
    this.types = this.quoteService.Types;
  }

  get Travelers(): FormArray { return this.form.get('travelers') as FormArray; }

  createForm() {
    this.form = new FormGroup({
      travelers: this.fb.array([this.createItem(), this.createItem()])
    })
  }

  createItem(): FormGroup {
    return this.fb.group({
      dob:this.fb.control('', [Validators.required]),
      type:this.fb.control('', [Validators.required])
    });
  }

  onIncrease() {
    this.Travelers.push(this.createItem());
  }

  removeField(index: number) {
    const ele = document.getElementById('field-'+index);
    ele.parentNode.removeChild(ele);
  }

  closeModal() {
    this.modalCtrl.dismiss(this.items, "cancel");
  }

  onSubmit(form: NgForm) {
    const data = {
      "type": form.value.type,
      "dob": this.convertDate(form.value.dob)
    };
    console.log(typeof this.items);
    
    
    this.items.push(data);
    form.reset();

    console.log(this.items);
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

  removeRecord(index: number) {
    this.items = this.items.filter(el => el == index);
  }


}
