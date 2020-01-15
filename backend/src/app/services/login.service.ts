import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../url';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  adminLogin(data) {
    return this.http.post(`${url}adminlogin`, data);
  }
}
