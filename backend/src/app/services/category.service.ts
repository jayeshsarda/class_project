import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../url';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory (data) {
    return this.http.post(`${url}addCategory`, data);
  }

  getCategory() {
    return this.http.get(`${url}getCategory`);
  }

  deleteCategory(id) {
    return this.http.post(`${url}deleteCategory`, {'id': id});
  }

  getByIdCategory(id) {
    return this.http.get(`${url}getByIdCategory/${id}`);
  }

  editCategory(data) {
    return this.http.post(`${url}editCategory`, data);
  }

  editCatByImage(data) {
    return this.http.post(`${url}editcatbyimage`, data);
  }
}
