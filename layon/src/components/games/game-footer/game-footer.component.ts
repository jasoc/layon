import { Component, Input } from '@angular/core';

@Component({
  selector: 'game-footer',
  templateUrl: './game-footer.component.html',
  styleUrls: ['./game-footer.component.scss']
})
export class GameFooterComponent {

    @Input() public title?: string;
    @Input() public genres?: string[];

    constructor() { }
}
