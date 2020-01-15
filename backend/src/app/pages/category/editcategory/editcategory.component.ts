import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
  myForm: FormGroup;
  imagePath;
  resData;
  cid;
  cImage;
  constructor(private fb: FormBuilder, private catService: CategoryService, private router: Router, private ac: ActivatedRoute ) { }

  ngOnInit() {
    this.validate();
    this.ac.params.subscribe(par => {
        this.cid = par.cid;
        this.catService.getByIdCategory(this.cid)
          .subscribe(res => {
            this.resData = res;
            if (this.resData.err === 0) {
              this.cImage = this.resData.cdata.image;
              this.myForm.patchValue(this.resData.cdata);
            }
          });
    });
  }

  upImage(event) {
    if (event.target.files.length > 0) {
      this.imagePath = event.target.files[0];
    }
  }

  validate() {
    this.myForm = this.fb.group({
      cname : ['', [Validators.required, Validators.pattern('[a-z A-Z]+')]],
      description : [''],
      image : [''],
    });
  }

  editCategory() {
    const cname = this.myForm.controls.cname.value;
    const description = this.myForm.controls.description.value;
    if (this.imagePath === undefined) {
      this.catService.editCategory({'cname': cname, 'description': description, 'cid': this.cid})
        .subscribe(res => {
          console.log(res);
          this.router.navigate(['/dashboard/category']);
        });
    } else {
    }
  }

}
