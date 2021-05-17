import {Component, OnInit} from '@angular/core';
import {SpotifyService} from 'services/spotify.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'global-player',
  templateUrl: './global-player.component.html',
  styleUrls: ['./global-player.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({
        visibility: 'hidden',
        marginTop: 100,
      })),
      state('false', style({
        visibility: 'visible',
        marginTop: '*',
      })),
      transition('true <=> false', animate('200ms')),
    ]),
  ],
})
export class GlobalPlayerComponent implements OnInit {
  constructor(public _spotify: SpotifyService) { }

  ngOnInit(): void {
  }
}
