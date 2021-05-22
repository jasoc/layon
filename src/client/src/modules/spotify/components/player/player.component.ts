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
    const TOKEN = localStorage.getItem('APP_TOKEN');
    this._spotify.currentPlaying(TOKEN).subscribe( (res: apiResult) => {
      this._spotify.currentTrack = {
        name: res.data.item.name,
        id: res.data.item.id,
        image: res.data.item.album.images[0].url,
      };
    });
  }

  TOKEN = localStorage.getItem('APP_TOKEN');

  replay() {
    this._spotify.play(this.TOKEN, this._spotify.currentTrack.id).subscribe();
  }

  previous() {
    this._spotify.play(this.TOKEN, this._spotify.tracks[this._spotify.currentTrackIndex-1].id)
      .subscribe();
  }

  next() {
    this._spotify.play(this.TOKEN, this._spotify.tracks[this._spotify.currentTrackIndex+1].id)
      .subscribe();
  }

  pause() {
    this._spotify.pause(this.TOKEN).subscribe();
  }
}
