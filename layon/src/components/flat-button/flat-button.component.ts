import { Component, Input } from '@angular/core';

@Component({
  selector: 'flat-button',
  templateUrl: './flat-button.component.html',
  styleUrls: ['./flat-button.component.scss']
})
export class FlatButtonComponent {

    @Input("background")
    background: string = "royalblue";

    @Input("color")
    color: string = "white";

    @Input("size")
    size: string = "small" || "medium" || "big";

    constructor() { }
}
