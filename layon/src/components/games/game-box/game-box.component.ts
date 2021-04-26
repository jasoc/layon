import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'game-box',
    templateUrl: './game-box.component.html',
    styleUrls: ['./game-box.component.scss'],
    animations: [
        trigger('select', [
            state('selected', style({
                transform: 'scale(1.2)',
                marginLeft: '60px',
                marginRight: '60px'
            })),
            state('unselected', style({
                transform: '*',
                marginLeft: '*',
                marginRight: '*'
            })),
            transition('selected <=> unselected', [
                animate('100ms ease-in-out')
            ])
        ])
    ]
})
export class GameBoxComponent {

    @Input() public img?: string;

    public isSelected: boolean = false;

    constructor() { }
}
