import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomer();
  }

}
