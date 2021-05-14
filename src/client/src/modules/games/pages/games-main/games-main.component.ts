import {Component, OnInit, ViewChild} from '@angular/core';
import {GamesService, LayonBackendService, LayonService} from 'core/services';
import {apiResult, game, rawgGame} from 'core/models';
import {GamesListComponent} from 'modules/games';

@Component({
  selector: 'games-main',
  templateUrl: './games-main.component.html',
  styleUrls: ['./games-main.component.scss'],
})
export class GamesMainComponent implements OnInit {
  @ViewChild(GamesListComponent) gamesList?: GamesListComponent;

  constructor(
    public _games: GamesService,
    public _layonBackend: LayonBackendService,
    public _layon: LayonService,
  ) { }

  public fetched: boolean = false;

  ngOnInit(): void {
    this._layonBackend.getLocalUserName().subscribe(
      (response: apiResult) => {
        this._layon.userName = response.data;
      },
    );

    this._layonBackend.getLocalGames().subscribe((games) => {
      if (this._games.games) return;
      this._games.games = [];
      games.data.forEach((game: game) => {
        this._games.getAllGameInfo(game.name).subscribe((res: rawgGame) => {
          game.mainPicture = res.background_image;
          game.background = res.background_image;
          this._layonBackend.getPathLogoOfGame(game.name)
            .subscribe((data) => {
              game.icon = data;
              if (this._games.games) {
                this._games.games.push(game);
              }
              this.gamesList?.highlightAtIndex(0);
            });
        });
      });
    });
  }

  public getMainBackground() {
    if (this._games.currentGame) {
      return `url(${this._games.currentGame.background}) no-repeat center/cover` ?? 'none';
    }

    return 'none';
  }
}
