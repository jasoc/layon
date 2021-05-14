import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spotify-button',
  templateUrl: './spotify-button.component.html',
  styleUrls: ['./spotify-button.component.scss']
})
export class SpotifyButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  background: string = "transparent";

  @Input()
  color: string = "black";

  @Input()
  size: string = "small" || "medium" || "big";

}
