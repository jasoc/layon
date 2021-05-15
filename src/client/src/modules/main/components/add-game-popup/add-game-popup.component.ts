import {Component} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  group}
  from '@angular/animations';
import {GamesService} from 'core/services';

@Component({
  selector: 'add-game-popup',
  templateUrl: './add-game-popup.component.html',
  styleUrls: ['./add-game-popup.component.scss'],
  animations: [
    trigger('openClosePopup', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('130ms', style({
          opacity: 1,
        })),
      ]),
      transition(':leave', [
        animate('130ms', style({
          opacity: 0,
        })),
      ]),
    ]),
  ],
})
export class AddGamePopupComponent {
  constructor(public _games: GamesService) {}
  onCloseClick() {
    this._games.onGameAddPopupOpen = false;
  }
}
