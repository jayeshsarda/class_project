import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  myForm: FormGroup;
  resData: any;
  errmsg: any;
  constructor(
          private fb: FormBuilder,
          private loginService: LoginService,
          private router: Router,
          ) { }

  ngOnInit() {
    this.validate();
  }

  subLogin() {
    const formData = this.myForm.getRawValue();
    this.loginService.adminLogin(formData)
      .subscribe(res => {
        this.resData = res;
        if (this.resData.err === 0) {
          localStorage.setItem('sid', this.resData.uid);
          this.router.navigate(['dashboard']);
        }
        if (this.resData.err === 1) {
          this.errmsg = this.resData.msg;
        }
      }, err => {
        console.log(err);
      });
  }
  validate() {
    this.myForm = this.fb.group(
      {
        email : ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]],
        password : ['', Validators.required]
      }
    );
  }
}
