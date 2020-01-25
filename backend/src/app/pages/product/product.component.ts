import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  resData;
  pData;
  errMsg;
  succMsg;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProduct()
      .subscribe(res => {
        this.resData = res;
        this.pData = this.resData.data;
        // console.log(this.pData);
      }, err => {
        console.log(err);
      });
  }

  deleteProduct(id) {
      this.productService.deleteProduct(id)
        .subscribe(res => {
          this.resData = res;
          if (this.resData.err === 1) {
            this.errMsg = this.resData.msg;
          } else {
            this.succMsg = this.resData.msg;
          }
          this.productService.getProduct()
            .subscribe(res => {
              this.resData = res;
              this.pData = this.resData.data;
              // console.log(this.pData);
            }, err => {
              console.log(err);
            });
        }, err => {
          console.log(err);
        });
  }

}
