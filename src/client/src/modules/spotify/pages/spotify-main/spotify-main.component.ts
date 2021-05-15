import {Component, OnInit} from '@angular/core';
import {SpotifyService} from 'services/spotify.service';

@Component({
  selector: 'spotify-main',
  templateUrl: './spotify-main.component.html',
  styleUrls: ['./spotify-main.component.scss'],
})
export class SpotifyMainComponent implements OnInit {
  constructor(public _spotify: SpotifyService) {
    this._spotify.getGenres().subscribe( (res: any) => {
      console.log(res.data.categories.items[5]);
    });
  }

  ngOnInit(): void {
  }
}
