import {Component, OnInit} from '@angular/core';
import {apiResult} from 'core';
import {SpotifyService} from 'services/spotify.service';

@Component({
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
})
export class PlaylistsComponent implements OnInit {
  constructor(public _spotify: SpotifyService) {}

  ngOnInit(): void {
    this._spotify.getPlaylists(this.TOKEN).subscribe((res: apiResult) => {
      this._spotify.playlists = [];
      res.data.items.forEach( (playlist) => {
        this._spotify.playlists.push({
          name: playlist.name,
          id: playlist.id,
          image: playlist.images[0].url,
        });
      });
    });
  }

  TOKEN = localStorage.getItem('APP_TOKEN');

  getPlaylistTracks(index: number) {
    this._spotify.getPlaylistTracks(this.TOKEN, this._spotify.playlists[index].id)
      .subscribe((res: apiResult) => {
        this._spotify.tracks = [];
        res.data.items.forEach( (track) => {
          this._spotify.tracks.push({
            name: track.track.name,
            id: track.track.id,
            duration: Math.floor(track.track.duration_ms / 60000).toString() + ':' +
              ((track.track.duration_ms % 60000) / 1000).toString().split('.')[0],
            artists: track.track.artists[0].name,
          });
        });
        this._spotify.currentPlaylistIndex = index;
      });
  }
}
