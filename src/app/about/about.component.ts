import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {MyserviceService} from '../service/myservice.service';
/*
  Custom Validation
 */
function Agerangevalidator(val: AbstractControl) {
    if (isNaN(val.value) || val.value < 18 || val.value > 50) {
      return {ageRange: true};
    }
    return null;
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  myForm: FormGroup;
  resData;
  constructor(private f: FormBuilder, private nuser: MyserviceService) { }

  ngOnInit() {
    this.validate();
  }

  validate() {
    this.myForm = this.f.group({
      name : ['', [Validators.required, Validators.pattern('[a-z A-Z]+')]],
      email : ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]],
      phone : ['', [Validators.required, Validators.pattern('[0-9 ]+')]],
      age : ['', Agerangevalidator],
      description : ['']
    });
  }

  postData() {
      const url = 'http://localhost/ecommerce/laravel/api/getPostCustomerData';
      const formData = this.myForm.getRawValue();
      this.nuser.postData(url, formData)
        .subscribe(res => {
          this.resData = res;
          if (this.resData.status === 'success') {
            console.log(this.resData.message);
          } else {
            console.log('Data Not Find');
          }
        });
  }
}
