import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(public customerService: CustomerService) { }
  submitted: boolean = false;
  formControls = this.customerService.form.controls;
  
  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;
    if(this.customerService.form.valid){
      if(this.customerService.form.get('$key')?.value == null){
        //insert
        this.customerService.insertCustomer(this.customerService.form.value);
      }else{
        //update
      }
      this.submitted = false;
    }
    
  }

}
