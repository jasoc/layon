import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {playlist} from 'modules/spotify/models/playlist.model';
import {track} from 'modules/spotify/models/tracks.model';


@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(public http: HttpClient) { }

  private BASE_URL = 'http://localhost:3000';

  private TOKEN = localStorage.getItem('APP_TOKEN');

  public playlists?: playlist[];

  public currentPlaylist: number;

  public tracks?: track[];

  public currentTrack?;

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

  public getGenres() {
    return this.http
      .post(`${this.BASE_URL}/spotify/getgenres`, {TOKEN: this.TOKEN});
  }

  public getPlaylists() {
    return this.http
      .post(`${this.BASE_URL}/spotify/getplaylists`, {TOKEN: this.TOKEN});
  }

  public currentPlaying() {
    return this.http
      .post(`${this.BASE_URL}/spotify/currentplaying`, {TOKEN: this.TOKEN});
  }

  public getPlaylistTracks(playlistID: string) {
    return this.http
      .post(`${this.BASE_URL}/spotify/getplaylisttracks`,
        {TOKEN: this.TOKEN, playlistID: playlistID});
  }

  // public callAuthorizationApi() {
  //   return this.http
  //   .post(`${this.BASE_URL}/spotify/authorizationapi`, {});
  // }
}
