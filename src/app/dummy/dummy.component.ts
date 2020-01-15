import { Component, OnInit } from '@angular/core';
import { MyserviceService} from '../service/myservice.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})

export class DummyComponent implements OnInit {
  p = 1;
  name;
  email;
  phone;
  address;
  resData;
  nData;
  constructor(private nuser: MyserviceService) { }

  ngOnInit() {
    const url = 'http://localhost/ecommerce/laravel/api/getCustomer';
    this.nuser.getusers(url)
      .subscribe(res => {
        this.resData = res;
        if (this.resData.status === 'success') {
          this.nData = this.resData.customers;
          // console.log(this.nData);
        } else {
          console.log('Data Not Found');
        }
      }, err => {
        console.log(err);
      });
  }

  postData() {
    const url = 'http://localhost/ecommerce/laravel/api/save-user';
    const data = {name: this.name, email: this.email, phone: this.phone, address: this.address};

    this.nuser.postData(url, data)
      .subscribe(res => {
      this.resData = res;
      if (this.resData.status === 'success') {
        console.log(this.resData.message);
        this.ngOnInit();
      } else {
        console.log('Data Not Find');
      }
    });
  }
}
