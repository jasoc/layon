import {Component, Input} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'topbar-button',
  templateUrl: './topbar-button.component.html',
  styleUrls: ['./topbar-button.component.scss'],
  animations: [
    trigger('stayFocus', [
      state('open', style({
        background: '#0e1112be',
        width: '200px',
        fontSize: '20px',
      })),
      state('closed', style({
        background: 'transparent',
        width: '100px',
        fontSize: '*',
      })),
      transition('open <=> closed', [
        animate('130ms'),
      ]),
    ]),
  ],
})
export class TopbarButtonComponent {
  @Input() public active: boolean;
  @Input() public icon: string;

  constructor() { }
}
