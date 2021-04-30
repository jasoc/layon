import { Component, Input } from '@angular/core';
import { LayonBackendService } from 'services';
import { HttpClient } from '@angular/common/http';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'game-footer',
  templateUrl: './game-footer.component.html',
  styleUrls: ['./game-footer.component.scss'],
  animations: [
    trigger('open', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('0.1s', style({
          opacity: 1
        }))
      ]),
    ])
  ]
})
export class GameFooterComponent {

    @Input() public title?: string;
    @Input() public genres?: string[];

    constructor(public _layonBackend: LayonBackendService, public http: HttpClient) { }

    public add: boolean = false;

    openGame() {
      this._layonBackend.openGame("C:/Program Files/Process Lasso").subscribe();
    }

    openFileExplorer(): void {
      document.getElementById('hidden')?.click();
    }

}
