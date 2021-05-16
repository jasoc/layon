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
  selector: 'options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.scss'],
  animations: [
    trigger('mainButton', [
      state('rotated', style({
        transform: 'rotate(40deg)',
      })),
      state('normal', style({
        transform: '*',
      })),
      transition('* <=> *', [
        animate('200ms ease-in-out'),
      ]),
    ]),
    trigger('openMenu', [
      state('opened', style({
        opacity: '1',
      })),
      state('closed', style({
        opacity: '0',
      })),
      transition('* <=> *', [
        animate('200ms ease-in-out'),
      ]),
    ]),
  ],
})
export class OptionsMenuComponent {
  public buttonAnimated: boolean = false;
  public buttonHover: boolean = false;
  public menuOpened: boolean = false;

  constructor(public _games: GamesService) {}

  onMenuHover() {
    this.buttonAnimated = this.buttonHover = true;
  }
  onMenuUnHover() {
    if (this.menuOpened || !this.buttonHover) return;
    this.buttonAnimated = false;
  }
  onMenuCLick() {
    this.buttonAnimated = true;
    this.menuOpened = !this.menuOpened;
  }
  onGameAddOptionClick() {
    this._games.onGameAddPopupOpen = true;
    this.buttonAnimated = false;
    this.menuOpened = false;
  }
}
