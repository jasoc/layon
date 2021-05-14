import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {game} from 'core/models';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
    public games?: game[];
    public currentGame?: game;
    public gameToUploadGame?: game;

    public readonly BASE_RAWG_URL = 'https://api.rawg.io/api';
    public readonly API_FOOTER = '?key=c1e833f49e1d4c90b041380a305d1ce5';

    constructor(public http: HttpClient) { }

    public getAllGameInfo(gameName: string) {
      return this.http.get(`${this.BASE_RAWG_URL}/games/${gameName}${this.API_FOOTER}`);
    }
}
