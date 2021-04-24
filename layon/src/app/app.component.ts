import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'layon';

  constructor() {
    console.log("Test breakpoint");
  }

  ngAfterViewInit() {
    console.log("After view");
  }
}
