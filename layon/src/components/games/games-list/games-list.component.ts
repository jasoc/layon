import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { GameBoxComponent } from 'components/games';

@Component({
  selector: 'games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit, AfterViewInit {

    @ViewChildren(GameBoxComponent, { read: ElementRef }) gamesNative?: QueryList<ElementRef>;
    @ViewChildren(GameBoxComponent) games?: QueryList<GameBoxComponent>;

    public index: number = 0;

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
    }

    private highlightAtIndex(index: number) {
        this.gamesNative?.toArray()[index].nativeElement.scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });

        if (this.games) {

            this.gamesNative?.forEach((_, j) => {
                //gameNative.nativeElement.scrollIntoView({ behavior: 'smooth', block: "center" });

                if (index != j) {
                    if (this.games) {
                        this.games.toArray()[j].isSelected = false;
                    }
                }
            });

            this.games.toArray()[index].isSelected = true;
        }
    }

    highlightNextGame() {
        this.index++;
        this.highlightAtIndex(this.index);
    }

    highlightPreviousGame() {
        this.index--;
        this.highlightAtIndex(this.index);
    }
}
