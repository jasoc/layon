import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiResult } from 'models';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(public http: HttpClient) { }

  private BASE_URL = "http://localhost:3000";


  // Richiede l'autorizzazione per avere l'accesso ai dati
  public authorize() {
    return this.http
    .get(`${this.BASE_URL}/spotify/authorize`);
  }

  public fetchToken(code: string) {
    return this.http
    .post(`${this.BASE_URL}/spotify/fetchtoken`, { code: code });
  }

}
