import { Injectable } from '@angular/core';
import {SharedService} from '../shared/shared.service';
import { Subject } from 'rxjs';
import { UIService } from '../shared/ui.service';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  private _items: any[];
  loadItems = new Subject<any>();
  constructor(private odoo: SharedService, private uiService: UIService) {
    this._items = [
      {
        name: 'eslam'
      },
      {
        name: 'ahmed'
      }
    ];
    this.getAllCustomers();


  }

  getAllCustomers() {
    this.uiService.loadingChangedStatus.next(true);
    const data = {paramlist: { data: [['customer', '=', true]],
    need: ['display_name', 'email', 'image'] } };
    this.odoo.call_odoo_function('demo_test', 'admin', 'admin', 'res.partner', 'search_read', data)
      .subscribe(res=> {
       
        this.uiService.loadingChangedStatus.next(false);

          this.loadItems.next(res);
      });
  }

  searchCustomer(word) {
    const data = {paramlist: { data: [['customer', '=', true], ['name', '=', word]],
    need: ['display_name', 'email', 'image'] } };
    return this.odoo.call_odoo_function('demo_test', 'admin', 'admin', 'res.partner', 'search_read', data);
  }

  getCustomer(id: number) {
    const data = {paramlist: { data: [['customer', '=', true], ['id', '=', id]],
    need: ['display_name', 'email', 'image'] } };
    return this.odoo.call_odoo_function('demo_test', 'admin', 'admin', 'res.partner', 'search_read', data);
  }

  updateCustomer(partnerId, data) {
    const dataList = {
      paramlist: {
        data: [partnerId],
        params: data
      }
    }
    console.log('list', dataList);
    return this.odoo.call_odoo_function('demo_test', 'admin', 'admin', 'res.partner', 'write', dataList);

  }

  createCustomer(data) {
    const dataList = {
      paramlist: {
        data: data
      }
    }

    console.log('list', dataList);
    return this.odoo.call_odoo_function('demo_test', 'admin', 'admin', 'res.partner', 'create', dataList);

  }

  get items() { return [...this._items]; }
}
