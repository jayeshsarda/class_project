import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  p=1;
  resData;
  errMsg;
  succMsg;
  constructor(private fb: FormBuilder, private catService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.catService.getCategory()
      .subscribe(res => {
        this.resData = res;
      }, err => {
        console.log(err);
      });
  }

  getByIdCategory(id) {
    this.catService.getByIdCategory(id)
      .subscribe(res => {
        this.resData = res;
      }, err => {
        console.log(err);
      });
  }

  deleteCategory(id) {
    this.catService.deleteCategory(id)
      .subscribe(res => {
        this.resData = res;
        if(this.resData.err == 1) {
          this.errMsg = this.resData.msg;
        } else {
          this.succMsg = this.resData.msg;
        }
        this.catService.getCategory()
          .subscribe(res => {
            this.resData = res;
          }, err => {
            console.log(err);
          });
      }, err => {
        console.log(err);
      });
  }
}
