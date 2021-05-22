import {Component, OnInit} from '@angular/core';
import {NavigationExtras} from '@angular/router';
import {Router} from '@angular/router';
import {SpotifyService} from 'services/spotify.service';


@Component({
  selector: 'app-main',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  constructor(public router: Router,
    public _spotify: SpotifyService) {
      // this.router.navigate(['/games']);
  }

  ngOnInit() { }
}
