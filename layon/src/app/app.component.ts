import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'layon';


  public gameList: Array<String> = 
    [
      "Assassin's Creed",
      "Rust",
      "DayZ",
      "Rainbow Six Siege"
  ]
}
