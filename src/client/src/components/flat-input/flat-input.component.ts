import {Component, Input, Output, EventEmitter} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition}
  from '@angular/animations';

@Component({
  selector: 'flat-input',
  templateUrl: './flat-input.component.html',
  styleUrls: ['./flat-input.component.scss'],
  animations: [
    trigger('placeholderAnimated', [
      state('static', style({
        fontSize: '*',
        top: '*',
        left: '*',
        background: '*',
      })),
      state('moved', style({
        fontSize: '13px',
        top: '-15px',
        left: '5px',
        background: 'solid',
      })),
      transition('* <=> *', [
        animate('100ms ease-in-out'),
      ]),
    ]),
  ],
})
export class FlatInputComponent {
    @Input()
    placeholder: string = 'Placeholder example';
    @Input()
    color: string = 'royalblue';
    @Input()
    icon: string = 'account_circle';
    @Input()
    hint: string;
    @Input()
    text: string;
    @Output()
    textChange = new EventEmitter<string>();
    public placeholderAnimated: boolean = false;
    constructor() { }
    onFocus(event) {
      this.placeholderAnimated = true;
    }
    onFocusOut(event) {
      if (!this.text) this.placeholderAnimated = false;
      if (this.text.length > 0) return;
      this.placeholderAnimated = false;
    }
    getPlaceholder() {
      if (!this.placeholderAnimated) return '';
      return this.placeholder;
    }
}
