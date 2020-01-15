import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, AbstractControl, Validators} from '@angular/forms';
import { AdminregisterService } from '../../services/adminregister.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService: AdminregisterService, private router: Router) { }

  ngOnInit() {
    this.validate();
  }

  register() {
    const formData = this.myForm.getRawValue();
    this.registerService.adminRegister(formData)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/']);
      }, err => {
        console.log(err);
      });
  }
  validate() {
    this.myForm = this.fb.group(
      {
        name : ['', [Validators.required, Validators.pattern('[a-z A-Z]+')]],
        phone : ['', [Validators.pattern('[0-9]+')]],
        email : ['', [Validators.required, Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]],
        password : ['', Validators.required]
      }
    );
  }

}
