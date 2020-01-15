import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Output() myEvent = new EventEmitter();
  count = 0;
  constructor() { }
  bca() {
    this.count++;
    this.myEvent.emit(this.count);
  }
  ngOnInit() {
  }

}
