// import { ThisReceiver } from '@angular/compiler';
import {Component, OnInit} from '@angular/core';
import {apiResult} from 'core';
import {SpotifyService} from 'services/spotify.service';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  constructor(public _spotify: SpotifyService) { }

  ngOnInit(): void {
    this._spotify.currentPlaying(this.TOKEN).subscribe( (res: apiResult) => {
      if (res.data) {
        this._spotify.currentTrack = {
          name: res.data.item.name,
          id: res.data.item.id,
          image: res.data.item.album.images[0].url,
        };
      }
    });
  }

  TOKEN = localStorage.getItem('APP_TOKEN');
  deviceID = localStorage.getItem('DEVICE_ID');

  changeVolume() {
    this._spotify.changeVolume(this.TOKEN, this._spotify.volume).subscribe();
  }


  replay() {
    this._spotify.play(this.TOKEN, this._spotify.currentTrack.id, this.deviceID).subscribe();
  }

  previous() {
    if (this._spotify.playlists[this._spotify.currentPlaylistIndex].currentPlaying == 0) {
      // eslint-disable-next-line max-len
      this._spotify.playlists[this._spotify.currentPlaylistIndex].currentPlaying = this._spotify.playlists[this._spotify.currentPlaylistIndex].tracks.length;
    }

    this._spotify.playlists[this._spotify.currentPlaylistIndex].currentPlaying--;

    this._spotify.play(this.TOKEN,
      // eslint-disable-next-line max-len
      this._spotify.playlists[this._spotify.currentPlaylistIndex].tracks[this._spotify.playlists[this._spotify.currentPlaylistIndex].currentPlaying].id, this.deviceID)
      .subscribe();
  }

  next() {
    // eslint-disable-next-line max-len
    if (this._spotify.playlists[this._spotify.currentPlaylistIndex].currentPlaying+1 > this._spotify.playlists[this._spotify.currentPlaylistIndex].tracks.length-1) {
      this._spotify.playlists[this._spotify.currentPlaylistIndex].currentPlaying = 0;
    }

    this._spotify.playlists[this._spotify.currentPlaylistIndex].currentPlaying++;

    this._spotify.play(this.TOKEN,
      // eslint-disable-next-line max-len
      this._spotify.playlists[this._spotify.currentPlaylistIndex].tracks[this._spotify.playlists[this._spotify.currentPlaylistIndex].currentPlaying].id, this.deviceID)
      .subscribe();
  }

  pause() {
    this._spotify.pause(this.TOKEN, this.deviceID).subscribe();
  }
}
