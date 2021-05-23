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
        this._spotify.currentPlaying(TOKEN).subscribe( (response: apiResult) => {
          this._spotify.currentTrack = {
            name: response.data.item.name,
            id: response.data.item.id,
            image: response.data.item.album.images[0].url,
          };
        });
      }
    });
    this._spotify.currentTrackIndex = index;
  }
}
