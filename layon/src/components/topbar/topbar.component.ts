import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

}
