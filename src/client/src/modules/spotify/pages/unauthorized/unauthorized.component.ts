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
    public router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['spotify/player']);
    if (window.location.href.includes('code')) {
      this._spotify.fetchToken().subscribe( (res) => {
        if (res) {
          this.router.navigate(['spotify/player']);
        }
      });
    }
  }

  authorize(): void {
    this._spotify.authorize().subscribe( (res: apiResult) => {
      window.location.href = res.data; // Da cambiare
      // console.log(window.location.href.split('=')[1]);
    });
  }
}
