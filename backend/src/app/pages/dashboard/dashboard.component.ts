import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sid;
  constructor(private router: Router) { }

  ngOnInit() {
    this.sid = localStorage.getItem('sid');
  }

  logout() {
    localStorage.removeItem('sid');
    this.router.navigate(["/"]);
  }

}
