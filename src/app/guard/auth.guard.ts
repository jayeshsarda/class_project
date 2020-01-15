import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate() {

    const uname = 'jayesh';
    if (uname === 'jayesh') {
        return true;
    } else {
        alert('You are not aurthorise');
        return false;
    }
  }

}
