import {Component, OnInit} from '@angular/core';
import {apiResult} from 'core';
import {SpotifyService} from 'services/spotify.service';

@Component({
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
})
export class PlaylistsComponent implements OnInit {
  constructor(public _spotify: SpotifyService) { }

  ngOnInit(): void {
    const TOKEN = localStorage.getItem('APP_TOKEN');
    this._spotify.getPlaylists(TOKEN).subscribe((res: apiResult) => {
      this.playlists.push(...res.data.items);
    });
  }

  public playlists = [];
}
