import { Component, OnInit } from '@angular/core';

import { GamesService, LayonBackendService, LayonService } from 'services';
import { apiResult } from 'models';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(
        public _games: GamesService,
        public _layonBackend: LayonBackendService,
        public _layon: LayonService,
        public http: HttpClient
    ) { }

    ngOnInit(): void {
        this._layonBackend.getLocalUserName().subscribe(
            (response: apiResult) => {
                this._layon.userName = response.data;
            }
        );
        
        // Don't let go, don't run away love, I still got feelings you are my passion  ♩ ♫ ♩ ♫
        this._layonBackend.getGamesFromMachine().subscribe( (res: apiResult) => {
            this._games.games = this._games.games.concat(res.data); 
            this.http.get("https://api.rawg.io/api/games?key=c1e833f49e1d4c90b041380a305d1ce5&dates=2019-09-01,2019-09-30&platforms=18,1,7").subscribe(id => {
                console.log(id);
            })
        });

    }
}
