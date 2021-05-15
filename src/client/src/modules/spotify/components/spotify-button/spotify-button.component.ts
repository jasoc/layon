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
  size: string = "small" || "medium" || "big";

}
