import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'services/spotify.service';
import { apiResult } from 'core/models';

@Component({
  selector: 'unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent implements OnInit {

  constructor(public _spotify: SpotifyService) { }

  ngOnInit(): void {
    if(window.location.href.includes('code')) {

      this._spotify.fetchToken(window.location.href.split('=')[1]).subscribe();
    }
  }

  authorize(): void {
    this._spotify.authorize().subscribe( (res: apiResult) => {

      window.location.href = res.data; // Da cambiare 
    });
  }


}
