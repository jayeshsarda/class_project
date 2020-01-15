import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }

  getusers(url) {
    return this.http.get(url);
  }
  postData(url, data) {
    return this.http.post(url, data);
  }
}
