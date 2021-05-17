import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(public http: HttpClient) { }

  private BASE_URL = 'http://localhost:3000';

  public isPause: boolean = false;

  public repeat: boolean = false;

  public isAuthorized: boolean = false;

  public showGlobalPlayer: boolean = true;

  // Richiede l'autorizzazione per avere l'accesso ai dati
  public authorize() {
    return this.http
      .get(`${this.BASE_URL}/spotify/authorize`);
  }

  public fetchToken(code: string) {
    return this.http
      .post(`${this.BASE_URL}/spotify/fetchtoken`, {code: code});
  }

  public getGenres(TOKEN: string) {
    return this.http
      .post(`${this.BASE_URL}/spotify/getgenres`, {TOKEN: TOKEN});
  }

  public getPlaylists(TOKEN: string) {
    return this.http
      .post(`${this.BASE_URL}/spotify/getplaylists`, {TOKEN: TOKEN});
  }

  // public callAuthorizationApi() {
  //   return this.http
  //   .post(`${this.BASE_URL}/spotify/authorizationapi`, {});
  // }
}
