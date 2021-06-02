import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input()
  value: number;

  @Output()
  valueChange = new EventEmitter<number>();
}
