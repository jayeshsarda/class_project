import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jayesh Sarda';

  courses = ['Angular', 'PHP', 'Node', 'Java']
  data = [];

  abc() {
    this.data = [
      {name : 'Jayesh', age : 25, city : 'Indore'},
      {name : 'Harshal', age : 26, city : 'Kota'},
      {name : 'Deependra', age : 25, city : 'Jaipur'}
    ];
  }

  show: boolean = true;

  visible = true;
  toggleDiv() {
    this.visible = !this.visible;
  }
}
