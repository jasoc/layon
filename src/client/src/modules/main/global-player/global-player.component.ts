import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'services/spotify.service';


@Component({
  selector: 'global-player',
  templateUrl: './global-player.component.html',
  styleUrls: ['./global-player.component.scss']
})
export class GlobalPlayerComponent implements OnInit {

  constructor(public _spotify: SpotifyService) { }

  ngOnInit(): void {
  }

}
