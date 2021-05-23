import {Component, OnInit} from '@angular/core';
import {apiResult} from 'core';
import {SpotifyService} from 'services/spotify.service';


@Component({
  selector: 'left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss'],
})
export class LeftSideBarComponent implements OnInit {
  constructor(public _spotify: SpotifyService) { }

  ngOnInit(): void {
    this._spotify.getUserProfile(this.TOKEN).subscribe( (res: apiResult) => {
      this._spotify.currentUser = {
        name: res.data.display_name,
        email: res.data.email,
        id: res.data.id,
        country: res.data.country,
        image: res.data.images[0].url,
      };
    });
  }

  TOKEN = localStorage.getItem('APP_TOKEN');

  public songName: string = '';
}
