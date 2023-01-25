import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
  selectedCustomer: any;

  customers: Customer[] = [
    {customerNo: 1, name: 'Irfan', address: '', city: 'salem', country: 'India'},
    {customerNo: 2, name: 'Imran', address: '', city: 'salem', country: 'India'},
    {customerNo: 3, name: 'Apsar', address: '', city: 'salem', country: 'India'},
    {customerNo: 4, name: 'Aihaan', address: '', city: 'salem', country: 'India'},
    {customerNo: 5, name: 'Arif', address: '', city: 'salem', country: 'India'}
  ]
}
