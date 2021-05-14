import {Component, Input} from '@angular/core';
import {LayonBackendService, UtilsService, GamesService} from 'core/services';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'game-footer',
  templateUrl: './game-footer.component.html',
  styleUrls: ['./game-footer.component.scss'],
  animations: [
    trigger('open', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('0.1s', style({
          opacity: 1,
        })),
      ]),
    ]),
  ],
})
export class GameFooterComponent {
    @Input() public title?: string;
    @Input() public genres?: string[];

    constructor(
      public _layonBackend: LayonBackendService,
      public _utils: UtilsService,
      public _games: GamesService,
      public http: HttpClient,
      public router: Router,
    ) { }

    public add: boolean = false;

    openGame() {
      this._layonBackend.openGame(this._games.currentGame.path).subscribe();
    }

    openFileExplorer(): void {
      document.getElementById('hidden')?.click();
    }

    addGame() {
      this._layonBackend.writeGamesIntoJson(
        this._games.currentGame.name,
        this._games.currentGame.path)
        .subscribe();
    }

    bruteforce() {
      this._layonBackend.bruteforce().subscribe();
    }

    discover() {
      this.router.navigate(['games/ciao']);
    }
}
