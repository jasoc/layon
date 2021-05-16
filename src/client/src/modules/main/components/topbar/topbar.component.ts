import {Component} from '@angular/core';
import {GamesService} from 'core/services';
import {Router} from '@angular/router';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  constructor(
    public _gamesService: GamesService,
    public router: Router,
  ) {}

  // This is the header/navbar, when its value is true
  // the specific button corresponding on its index will
  // be highlighted, only one value should be true.
  public navBar: {name: string, value: boolean}[] = [
    {name: 'Home', value: false},
    {name: 'Apps', value: false},
    {name: 'Games', value: true},
    {name: 'Settings', value: false},
    {name: 'Spotify', value: false},
  ]

  // This function will set only one item/button
  // active(highlighted)
  setActive(index: number): void {
    for (const i of this.navBar) i.value = false;
    this.navBar[index].value = true;
  }

  route(index: number) {
    this.router.navigate([this.navBar[index].name.toLocaleLowerCase()]);
  }
}
