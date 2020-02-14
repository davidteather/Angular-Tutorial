import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'David Teather'; 

  constructor() {
    // Constructors run before component made
    console.log(123);
    this.changeName("David J Teather");
  }

  changeName(name:string):void {
    this.name = name;
  }
}
