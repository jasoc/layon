import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {apiResult} from 'core/models';


@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(public http: HttpClient) { }

  private BASE_URL = 'http://localhost:3000';

  public isAuthorized: boolean = false;

  // Richiede l'autorizzazione per avere l'accesso ai dati
  public authorize() {
    return this.http
      .get(`${this.BASE_URL}/spotify/authorize`);
  }

  public fetchToken() {
    return this.http
    .get(`${this.BASE_URL}/spotify/fetchtoken`);
  }

  public getGenres() {
    return this.http
    .get(`${this.BASE_URL}/spotify/getgenres`);
  }

  // public callAuthorizationApi() {
  //   return this.http
  //   .post(`${this.BASE_URL}/spotify/authorizationapi`, {});
  // }

}
