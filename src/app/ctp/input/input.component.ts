import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  counter;
  constructor() { }
  myInput(event) {
    this.counter = event;
  }
  ngOnInit() {
  }

}
