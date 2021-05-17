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
    // this.router.navigate(['spotify/player']); // <------- RIMUOVERE STA LINEA
    if (this._spotify.isAuthorized) {
      this.router.navigate(['spotify/player']);
    }
  }

  ngOnInit(): void {
    if (window.location.href.includes('code')) {
      this._spotify.fetchToken(window.location.href.split('=')[1]).subscribe( (res: apiResult) => {
        this._spotify.isAuthorized = true;
        localStorage.setItem('APP_TOKEN', res.data);
        this.router.navigate(['spotify/player']);
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
