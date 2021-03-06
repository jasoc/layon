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

  public currentUser?: user;

  public playlists?: playlist[];

  public currentPlaylistIndex: number = 0;

  public currentTrackIndex?: number;

  public tracks?: track[];

  public currentTrack?: track;

  public isPause: boolean = false;

  public repeat: boolean = false;

  public volume: number = 30;

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

  public currentPlaying(TOKEN: string) {
    return this.http
      .post(`${this.BASE_URL}/spotify/currentplaying`, {TOKEN: TOKEN});
  }

  public getPlaylistTracks(TOKEN: string, playlistID: string) {
    return this.http
      .post(`${this.BASE_URL}/spotify/getplaylisttracks`,
        {TOKEN: TOKEN, playlistID: playlistID});
  }

  public isTokenValid(refreshToken: string) {
    return this.http
      .post(`${this.BASE_URL}/spotify/istokenvalid`, {refresh_token: refreshToken});
  }

  public play(TOKEN: string, trackID: string, deviceID: string) {
    this.isPause = false;
    return this.http
      .post(`${this.BASE_URL}/spotify/play`, {
        TOKEN: TOKEN,
        trackID: trackID,
        device_id: deviceID,
      });
  }

  public pause(TOKEN: string, deviceID: string) {
    return this.http
      .post(`${this.BASE_URL}/spotify/pause`, {TOKEN: TOKEN, device_id: deviceID});
  }

  public getUserProfile(TOKEN: string) {
    return this.http
      .post(`${this.BASE_URL}/spotify/userprofile`, {TOKEN: TOKEN});
  }

  public changeVolume(TOKEN: string, volume: number) {
    return this.http
      .post(`${this.BASE_URL}/spotify/volume`, {TOKEN: TOKEN, volume: volume});
  }

  // public callAuthorizationApi() {
  //   return this.http
  //   .post(`${this.BASE_URL}/spotify/authorizationapi`, {});
  // }
}
