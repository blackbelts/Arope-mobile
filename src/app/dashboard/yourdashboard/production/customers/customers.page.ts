import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  listedLoadedPlaces;
  constructor() { }

  ngOnInit() {
    console.log('customers');
    this.listedLoadedPlaces = [
      {
        title: "Customer Name #1",
        description: "Customer Description #1"
      },
      {
        title: "Customer Name #2",
        description: "Customer Description #2"
      }
    ]
  }

}
