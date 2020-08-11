import { Component, OnInit } from '@angular/core';
import { CustomersPage } from './customers/customers.page';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-production',
  templateUrl: './production.page.html',
  styleUrls: ['./production.page.scss'],
})
export class ProductionPage implements OnInit {
  title: string;
  customerPage: CustomersPage;
  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translate.get('prod').subscribe(async  (text) => {
      this.title = await text.title;
    });
  }

}
