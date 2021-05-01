import { Component, Input, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'topbar-button',
  templateUrl: './topbar-button.component.html',
  styleUrls: ['./topbar-button.component.scss'],
  animations: [
    trigger('stayFocus', [
      state('open', style({
        background: '#0e1112be',
        margin: '0px 10px 0px 10px',
        fontSize: '20px'
      })),
      state('closed', style({
        background: 'transparent',
        margin: '0px',
        fontSize: '*'
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ])
    ])
  ]
})
export class TopbarButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public active!: boolean;

  

}
