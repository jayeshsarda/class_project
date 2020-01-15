import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from '../url';

@Injectable({
  providedIn: 'root'
})
export class AdminregisterService {

  constructor(private http: HttpClient) { }

  adminRegister(data) {
    return this.http.post(`${url}adminregister`, data);
  }
}
