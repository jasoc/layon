import {Component, OnInit} from '@angular/core';
import {SpotifyService} from 'services/spotify.service';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  constructor(public _spotify: SpotifyService) { }

  ngOnInit(): void {
  }
}
