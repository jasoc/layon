import {Component, OnInit} from '@angular/core';
import {SpotifyService} from 'services/spotify.service';

@Component({
  selector: 'spotify-main',
  templateUrl: './spotify-main.component.html',
  styleUrls: ['./spotify-main.component.scss'],
})
export class SpotifyMainComponent implements OnInit {
  constructor(public _spotify: SpotifyService) {
  }

  ngOnInit(): void {
    const TOKEN = localStorage.getItem('APP_TOKEN');
    this._spotify.currentPlaying(TOKEN).subscribe( (res) => {
      console.log(res);
    });
  }
}
