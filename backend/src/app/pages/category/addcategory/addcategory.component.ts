import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  myForm: FormGroup;
  imagePath;
  constructor(private fb: FormBuilder, private catService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.validate();
  }

  upImage(event) {
    if(event.target.files.length > 0) {
      this.imagePath = event.target.files[0];
      //console.log(this.imagePath);
    }
  }

  validate() {
    this.myForm =this.fb.group({
      cname :['', [Validators.required, Validators.pattern('[a-z A-Z]+')]],
      description :[''],
      image :[''],
    });
  }

  saveCategory() {
    const fdata = new FormData();
    fdata.append('cname', this.myForm.controls.cname.value);
    fdata.append('image', this.imagePath);
    fdata.append('description', this.myForm.controls.description.value);
    this.catService.addCategory(fdata)
      .subscribe(res => {
        this.router.navigate(['/dashboard/category'])
        //console.log(res);
      },err =>{
        console.log(err);
      });
  }
}
