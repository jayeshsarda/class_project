import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { url } from '../url';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get(`${url}getProduct`);
  }

  addProduct(data) {
    return this.http.post(`${url}addProduct`, data);
  }

  deleteProduct(id) {
    return this.http.post(`${url}deleteProduct`, { 'id' : id });
  }

}
