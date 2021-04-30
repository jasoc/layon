import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'circular-button',
  templateUrl: './circular-button.component.html',
  styleUrls: ['./circular-button.component.scss']
})
export class CircularButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // addGame(): void {

  //   this._gamesService.games?.push(
  //     {
  //       name: this.name,
  //       link: this.path
  //     }
  //   );

  //   this._layonBackend.writeGamesIntoJson(
  //     this.name, this.path
  //   ).subscribe();
  // }

}
