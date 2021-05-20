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
      console.log(res);
      this._spotify.playlists = [];
      res.data.items.forEach( (playlist) => {
        this._spotify.playlists.push({
          name: playlist.name,
          id: playlist.id,
          image: playlist.images[0].url,
        });
      });
    });
  }
}
