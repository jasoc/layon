import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, state, style, animate, transition, query, animateChild, group } from '@angular/animations';
import { game } from 'models';
import { UtilsService } from 'services';

@Component({
    selector: 'game-box',
    templateUrl: './game-box.component.html',
    styleUrls: ['./game-box.component.scss'],
    animations: [
        trigger('icon', [
            state('side', style({
                position: 'absolute',
                opacity: 1,
                left: '52%'
            })),
            state('centered', style({
                opacity: 0,
                left: '100%'
            })),
            transition('* <=> *', [
                animate('250ms ease-in-out')
            ])
        ]),
        trigger('title', [
            state('visible', style({
                position: 'absolute',
                opacity: 1,
                right: '52%'
            })),
            state('hide', style({
                opacity: 0,
                right: '100%'
            })),
            transition('* <=> *', [
                animate('250ms ease-in-out')
            ])
        ]),
        trigger('background', [
            state('lucid', style({
                opacity: 1
            })),
            state('black', style({
                opacity: 0.5
            })),
            transition('* <=> *', [
                animate('200ms ease-in-out')
            ])
        ]),
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
            transition('unselected <=> selected', [
                group([
                    query('@icon', animateChild()),
                    query('@title', animateChild()),
                    query('@background', animateChild()),
                    animate('200ms ease-in-out')
                ])
            ])
        ])
    ]
})
export class GameBoxComponent {

    @Input() public game?: game;

    public isSelected: boolean = false;

    constructor(private sanitizer: DomSanitizer, private _utils: UtilsService) { }

    background() {
        return (this.game ?? <game> {}).mainPicture ?? "";
    }

    name() {
        return this._utils.formatGameNameToUpperCases((this.game ?? <game> {}).name ?? "");
    }

    icon() {
        return this.sanitizer.bypassSecurityTrustUrl(
            URL.createObjectURL((this.game ?? <game> {}).icon ?? "")
        );
    }

    faded() {
        return this.isSelected;
    }
}
