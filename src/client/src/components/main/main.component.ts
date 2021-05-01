import { Component, OnInit } from '@angular/core';
import { GamesService, LayonBackendService, LayonService } from 'services';
import { apiResult, game, rawgGame } from 'models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(
        public _games: GamesService,
        public _layonBackend: LayonBackendService,
        public _layon: LayonService
    ) { }

    ngOnInit(): void {
        this._layonBackend.getLocalUserName().subscribe(
            (response: apiResult) => {
                this._layon.userName = response.data;
            }
        );

        this._layonBackend.getLocalGames().subscribe((games) => {
            games.data.forEach((game: game) => {
                
                this._games.getAllGameInfo(game.name).subscribe((res: rawgGame) => {
                    console.log(res);
                    game.mainPicture = res.background_image;
                    game.background = res.background_image;
                    this._games.games.push(game);
                });

            });
        });
    }

    public getMainBackground() {
        if (this._games.currentGame)
            return `url(${this._games.currentGame.background}) no-repeat center/cover` ?? 'none';

        return 'none';
    }
}
