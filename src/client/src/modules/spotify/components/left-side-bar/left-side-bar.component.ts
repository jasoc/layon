import {Component, OnInit} from '@angular/core';
import {SpotifyService} from 'services/spotify.service';


@Component({
  selector: 'left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss'],
})
export class LeftSideBarComponent implements OnInit {
  constructor(public _spotify: SpotifyService) { }

  ngOnInit(): void {}

  public songName: string = '';
}
