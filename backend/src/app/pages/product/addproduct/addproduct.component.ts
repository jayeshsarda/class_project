import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {ProductService} from '../../../services/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  myForm: FormGroup;
  imagePath;
  resData;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private catService: CategoryService
  ) { }

  ngOnInit() {
    this.validate();
    this.catService.getCategory()
      .subscribe(res => {
        this.resData = res;
        // console.log(this.resData);
      }, err => {
        console.log(err);
      });
  }

  upImage(event) {
    if (event.target.files.length > 0) {
      this.imagePath = event.target.files[0];
      // console.log(this.imagePath);
    }
  }

  validate() {
    this.myForm = this.fb.group({
      pname : ['', [Validators.required, Validators.pattern('[a-z A-Z]+')]],
      category_id : [''],
      image : [''],
      regular_price : ['', [Validators.pattern('[0-9 ]+')]],
      sale_price : ['', [Validators.pattern('[0-9 ]+')]],
      description : [''],
    });
  }

  saveProduct() {
    const fdata = new FormData();
    fdata.append('pname', this.myForm.controls.pname.value);
    fdata.append('category_id', this.myForm.controls.category_id.value);
    fdata.append('image', this.imagePath);
    fdata.append('regular_price', this.myForm.controls.regular_price.value);
    fdata.append('sale_price', this.myForm.controls.sale_price.value);
    fdata.append('description', this.myForm.controls.description.value);
    this.productService.addProduct(fdata)
      .subscribe(res => {
        this.router.navigate(['/dashboard/product']);
        // console.log(res);
      }, err => {
        console.log(err);
      });
  }

}
