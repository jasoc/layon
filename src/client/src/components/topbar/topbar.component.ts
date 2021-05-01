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

  constructor(public _gamesService: GamesService) { }

  ngOnInit(): void {
  }
  // This is the header/navbar, when its value is true
  // the specific button corresponding on its index will
  // be highlighted, only one value should be true.
  public navBar: {name: string, value: boolean}[] = [
    {name: "Home", value: false },
    {name: "Apps", value: false },
    {name: "Games", value: true },
    {name: "Settings", value: false }
  ]

  // This function will set only one item/button
  // active(highlighted)
  setActive(index: number): void {
    for(let i of this.navBar) i.value = false;
    this.navBar[index].value = true;
  }

}
