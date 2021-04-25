import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'game-box',
  templateUrl: './game-box.component.html',
  styleUrls: ['./game-box.component.scss']
})
export class GameBoxComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
}
