import {Component, Input, OnInit} from '@angular/core';
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
}
