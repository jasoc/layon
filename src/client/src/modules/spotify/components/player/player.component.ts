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
    this._spotify.currentPlaying().subscribe( (res: apiResult) => {
      console.log(res.data.item.name);
      console.log(res.data.item.album.images[0].url);
      this._spotify.currentTrack = {
        name: res.data.item.name,
        id: res.data.item.id,
        image: res.data.item.album.images[0].url,
      };
    });
  }

  play() {
    console.log("IN play");
    this._spotify.play().subscribe();
  }
}
