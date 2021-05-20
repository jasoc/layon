import {Component, Input} from '@angular/core';

@Component({
  selector: 'flat-button',
  templateUrl: './flat-button.component.html',
  styleUrls: ['./flat-button.component.scss'],
})
export class FlatButtonComponent {
    @Input()
    background: string = 'royalblue';

    @Input()
    color: string = 'white';

    @Input()
    size: string = 'small' || 'medium' || 'big';

    @Input()
    border: string = 'none' || 'thin' || 'thick';

    @Input('border-color')
    borderColor: string = 'grey';

    @Input()
    icon: string;

    constructor() { }
}
