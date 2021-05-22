import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {playlist} from 'modules/spotify/models/playlist.model';
import {track} from 'modules/spotify/models/tracks.model';
import {user} from 'modules/spotify/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(public http: HttpClient) { }

  private BASE_URL = 'http://localhost:3000';

  private TOKEN = localStorage.getItem('APP_TOKEN');

  private refreshToken = localStorage.getItem('REFRESH_TOKEN');

  public currentUser?: user;

  public playlists?: playlist[];

  public currentPlaylistIndex: number;

  public currentTrackIndex: number;

  public tracks?: track[];

  public currentTrack?: track;

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

  public isTokenValid() {
    return this.http
      .post(`${this.BASE_URL}/spotify/istokenvalid`, {refresh_token: this.refreshToken});
  }

  public play(trackID: string) {
    return this.http
      .post(`${this.BASE_URL}/spotify/play`, {TOKEN: this.TOKEN, trackID: trackID});
  }

  public pause() {
    return this.http
      .post(`${this.BASE_URL}/spotify/pause`, {TOKEN: this.TOKEN});
  }

  // public callAuthorizationApi() {
  //   return this.http
  //   .post(`${this.BASE_URL}/spotify/authorizationapi`, {});
  // }
}
