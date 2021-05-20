import {Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
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
import {game} from 'core/models';
import {UtilsService} from 'core/services';

@Component({
  selector: 'game-box',
  templateUrl: './game-box.component.html',
  styleUrls: ['./game-box.component.scss'],
  animations: [
    trigger('icon', [
      state('side', style({
        transform: 'scale(1,1)',
        opacity: 1,
      })),
      state('centered', style({
        transform: 'scale(1,0)',
        opacity: 0,
      })),
      transition('* <=> *', [
        animate('430ms ease-in-out'),
      ]),
    ]),
    trigger('title', [
      state('visible', style({
        transform: 'scale(1)',
      })),
      state('hide', style({
        transform: 'scale(0.6)',
      })),
      transition('* <=> *', [
        animate('430ms ease-in-out'),
      ]),
    ]),
    trigger('background', [
      state('lucid', style({
        opacity: 0.5,
      })),
      state('black', style({
        opacity: 1,
      })),
      transition('* <=> *', [
        animate('430ms ease-in-out'),
      ]),
    ]),
    trigger('select', [
      state('selected', style({
        transform: 'scale(1.2)',
        marginLeft: '60px',
        marginRight: '60px',
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
      })),
      state('unselected', style({
        transform: '*',
        marginLeft: '*',
        marginRight: '*',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      })),
      transition('unselected <=> selected', [
        group([
          query('@icon', animateChild()),
          query('@title', animateChild()),
          query('@background', animateChild()),
          animate('200ms ease-in-out'),
        ]),
      ]),
    ]),
  ],
})
export class GameBoxComponent {
    @Input() public game?: game;

    public isSelected: boolean = false;

    constructor(private sanitizer: DomSanitizer, private _utils: UtilsService) { }

    background() {
      return (this.game ?? <game> {}).mainPicture ?? '';
    }

    name() {
      return this._utils.formatGameNameToUpperCases((this.game ?? <game> {}).name ?? '');
    }

    icon() {
      return this.sanitizer.bypassSecurityTrustUrl(
        URL.createObjectURL((this.game ?? <game> {}).icon ?? ''),
      );
    }

    faded() {
      return this.isSelected;
    }
}
