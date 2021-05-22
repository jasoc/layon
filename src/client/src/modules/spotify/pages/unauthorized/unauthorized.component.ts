import {Component, OnInit} from '@angular/core';
import {SpotifyService} from 'services/spotify.service';
import {Router} from '@angular/router';
import {apiResult} from 'core/models';


@Component({
  selector: 'unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss'],
})
export class UnauthorizedComponent implements OnInit {
  constructor(public _spotify: SpotifyService,
    public router: Router) {
    const refreshToken = localStorage.getItem('REFRESH_TOKEN');
    if (localStorage.getItem('APP_TOKEN')) {
      this._spotify.isTokenValid(refreshToken).subscribe((res: apiResult) => {
        localStorage.setItem('APP_TOKEN', res.data);
        this._spotify.isAuthorized = true;
        this.router.navigate(['spotify/player']);
      });
    }
    if (this._spotify.isAuthorized) {
      this.router.navigate(['spotify/player']);
    }
  }

  ngOnInit(): void {
    if (window.location.href.includes('code')) {
      this._spotify.fetchToken(window.location.href.split('=')[1]).subscribe( (res: apiResult) => {
        this._spotify.isAuthorized = true;
        localStorage.setItem('APP_TOKEN', res.data.access_token);
        localStorage.setItem('REFRESH_TOKEN', res.data.refresh_token);
        console.log(res.data);
        this._spotify.currentUser = {
          name: res.data.profile.display_name,
          email: res.data.profile.email,
          id: res.data.profile.id,
          country: res.data.profile.country,
          image: res.data.profile.images[0].url,
        };
        this.router.navigate(['spotify/player']);
      });
    }
  }

  authorize(): void {
    this._spotify.authorize().subscribe( (res: apiResult) => {
      window.location.href = res.data;
    });
  }
}
