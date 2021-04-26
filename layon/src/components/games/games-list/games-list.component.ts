import { Component, ViewChildren, QueryList, ElementRef, Input } from '@angular/core';
import { GameBoxComponent } from 'components/games/game-box/game-box.component';

@Component({
  selector: 'games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent {

    @Input("game-list")
    gameList?: string[];

    @ViewChildren(GameBoxComponent, { read: ElementRef }) gamesNative?: QueryList<ElementRef>;
    @ViewChildren(GameBoxComponent) games?: QueryList<GameBoxComponent>;

    public index: number = 0;

    constructor() { }

    private highlightAtIndex(index: number): void {
        this.gamesNative?.toArray()[index].nativeElement.scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });

        if (this.games) {
            this.gamesNative?.forEach((_, j) => {
                if (index != j && this.games)
                    this.games.toArray()[j].isSelected = false;
            });

            this.games.toArray()[index].isSelected = true;
        }
    }

    highlightNextGame(): void {

        if (!this.games) return;
        if(this.index > this.games.length) return;

        this.index++;
        this.highlightAtIndex(this.index);
    }

    highlightPreviousGame(): void {
        if (!this.games) return;
        if(this.index > this.games.length) return;

        this.index--;
        this.highlightAtIndex(this.index);
    }
}
