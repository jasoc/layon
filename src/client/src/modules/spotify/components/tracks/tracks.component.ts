import {Component, OnInit} from '@angular/core';
import {apiResult} from 'core';
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
    const TOKEN = localStorage.getItem('APP_TOKEN');
    const deviceID = localStorage.getItem('DEVICE_ID');
    this._spotify.play(TOKEN, trackID, deviceID).subscribe((res: apiResult) => {
      if (res.success) {
        /* Bisogna subito sistemare, il setTimeout è una soluzione assolutamente
         * temporanea, per risolvere la currentTrack non aggiornata nel player
         */
        setTimeout( () => {
          this._spotify.currentPlaying(TOKEN).subscribe( (response: apiResult) => {
            this._spotify.currentTrack = {
              name: response.data.item.name,
              id: response.data.item.id,
              image: response.data.item.album.images[0].url,
            };
          });
        }, 500);
      }
    });
    this._spotify.currentTrackIndex = index;
    for (let i = 0; i < this._spotify.playlists.length; i++) {
      this._spotify.playlists[i].currentPlaying = undefined;
    }
    this._spotify.playlists[this._spotify.currentPlaylistIndex].currentPlaying = index;
  }
}
