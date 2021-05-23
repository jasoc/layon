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

  replay() {
    this._spotify.play(this.TOKEN, this._spotify.currentTrack.id, this.deviceID).subscribe();
  }

  previous() {
    if (this._spotify.currentTrackIndex == 0) {
      this._spotify.currentTrackIndex = this._spotify.tracks.length;
    }

    this._spotify.currentTrackIndex--;

    this._spotify.play(this.TOKEN,
      this._spotify.tracks[this._spotify.currentTrackIndex].id, this.deviceID)
      .subscribe();
  }

  next() {
    if (this._spotify.currentTrackIndex+1 > this._spotify.tracks.length-1) {
      this._spotify.currentTrackIndex = 0;
    }

    this._spotify.currentTrackIndex++;

    this._spotify.play(this.TOKEN,
      this._spotify.tracks[this._spotify.currentTrackIndex].id, this.deviceID)
      .subscribe();
  }

  pause() {
    this._spotify.pause(this.TOKEN, this.deviceID).subscribe();
  }
}
