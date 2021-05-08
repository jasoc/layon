import { Component, Input, NgModule } from '@angular/core';
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

    public gameName: string = "";

    public gamePath: string = "";

    openGame() {
      this._layonBackend.openGame("C:\\Program Files\\Process Lasso\\ProcessLasso.exe").subscribe();
    }

    openFileExplorer(): void {
      document.getElementById('hidden')?.click();
    }

    addGame() {
      this._layonBackend.writeGamesIntoJson(this.gameName, this.gamePath).subscribe();
    }

    bruteforce() {
      this._layonBackend.bruteforce().subscribe();
    }

}
