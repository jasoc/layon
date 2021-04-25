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
        margin: '0px 10px 0px 10px'
      })),
      state('closed', style({
        background: 'transparent',
        margin: '0px'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
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
