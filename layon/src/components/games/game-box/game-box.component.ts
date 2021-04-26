import { Component, OnInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';
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
export class GameBoxComponent implements OnInit {

    public isSelected: boolean = false;

    constructor() { }


    // DA FIXARE IMMEDIATAMENTE!, DOVREBBE ESSERE SOLO UNA STRINGA
    // E NON ANCHE UNDEFINED. DURANTE LA CHIAMATA API OVVIAMENTE TORNA
    // UNDEFINED, MA QUESTO NON DOVREBBE SUCCEDERE DATO CHE L'NGIF 
    // CONTROLLA SE SIA UNDEFINED.
    // IL PROBLEMA RISIEDE SU COMPONENTS>GAMES>GAME-BOX>GAME-BOX.COMPONENT.HTML
    // [img]="gameList[i].url"
    @Input() public img!: string | undefined;

    ngOnInit(): void {
    }
}
