import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiResult} from 'core/models';

@Injectable({
  providedIn: 'root',
})
export class LayonBackendService {
    private BASE_URL = 'http://localhost:3000';

    constructor(public http: HttpClient) { }

    public getLocalUserName() {
      return this.http.get<apiResult>(
        `${this.BASE_URL}/getinfo/getuserinfo`,
      );
    }

    public openGame(name?: string) {
      if (!name) return null;
      return this.http
        .get(`${this.BASE_URL}/games/start`, {
          params: {name: name},
        });
    }

    public writeGamesIntoJson(name: string, path: string) {
      return this.http.post(
        `${this.BASE_URL}/exec/writejson`, {data: {name: name, path: path}},
      );
    }

    public getLocalGames() {
      return this.http.get<apiResult>(
        `${this.BASE_URL}/getinfo/returngames`);
    }

    public getPathLogoOfGame(name: string) {
      return this.http
        .get(`${this.BASE_URL}/games/icon`, {
          params: {name: name},
          responseType: 'blob',
        });
    }

    public bruteforce() {
      return this.http
        .get(`${this.BASE_URL}/getinfo/bruteforce`);
    }
}
