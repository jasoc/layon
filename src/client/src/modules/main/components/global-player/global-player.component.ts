import {Component} from '@angular/core';
import {SpotifyService} from 'services/spotify.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'global-player',
  templateUrl: './global-player.component.html',
  styleUrls: ['./global-player.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({
        visibility: 'hidden',
        marginTop: 100,
      })),
      state('false', style({
        visibility: 'visible',
        marginTop: '*',
      })),
      transition('true <=> false', animate('200ms')),
    ]),
  ],
})
export class GlobalPlayerComponent {
  constructor(public _spotify: SpotifyService) { }

  TOKEN = localStorage.getItem('APP_TOKEN');
  deviceID = localStorage.getItem('DEVICE_ID');

  replay() {
    this._spotify.play(this.TOKEN, this._spotify.currentTrack.id, this.deviceID).subscribe();
  }

  pause() {
    this._spotify.pause(this.TOKEN, this.deviceID).subscribe();
  }

  changeVolume() {
    this._spotify.changeVolume(this.TOKEN, this._spotify.volume).subscribe();
  }
}
