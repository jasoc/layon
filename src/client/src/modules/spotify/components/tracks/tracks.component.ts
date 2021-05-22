import {Component, OnInit} from '@angular/core';
import {SpotifyService} from 'services/spotify.service';
// import {apiResult} from 'core';

@Component({
  selector: 'tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss'],
})
export class TracksComponent implements OnInit {
  constructor(public _spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  playSong(trackID: string, index: number) {
    this._spotify.play(trackID).subscribe();
    this._spotify.currentTrackIndex = index;
  }
}
