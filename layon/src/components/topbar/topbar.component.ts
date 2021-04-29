import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { GamesService } from 'services';
import { LayonBackendService } from 'services';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(public _gamesService: GamesService, 
    public _layonBackend: LayonBackendService) { }

  ngOnInit(): void {
  }

  public name: string = "";

  public path: string = "";

  // This is the header/navbar, when its value is true
  // the specific button corresponding on its index will
  // be highlighted, only one value should be true.
  public navBar: {name: string, value: boolean}[] = [
    {name: "Home", value: true },
    {name: "Apps", value: false },
    {name: "Games", value: false },
    {name: "Settings", value: false }
  ]

  // This function will set only one item/button
  // active(highlighted)
  setActive(index: number): void {
    for(let i of this.navBar) i.value = false;
    this.navBar[index].value = true;
  }

  addGame(): void {

    this._gamesService.games?.push(
      {
        name: this.name,
        link: this.path
      }
    );

    this._layonBackend.writeGamesIntoJson(
      this.name, this.path
    ).subscribe();
  }
}
