import {Component, ViewChildren, QueryList, ElementRef, Input} from '@angular/core';
import {GameBoxComponent} from 'modules/games/components/game-box/game-box.component';
import {GamesService} from 'core/services';
import {game} from 'core/models';

@Component({
  selector: 'games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss'],
})
export class GamesListComponent {
    @Input('game-list')
    gameList: game[] = [];

    @ViewChildren(GameBoxComponent, {read: ElementRef}) gamesNative?: QueryList<ElementRef>;
    @ViewChildren(GameBoxComponent) games?: QueryList<GameBoxComponent>;

    public index: number = 0;

    constructor(
        public _games: GamesService,
    ) { }

    public highlightAtIndex(index: number): void {
      this.gamesNative?.toArray()[index]
        .nativeElement
        .scrollIntoView({behavior: 'smooth', block: 'end', inline: 'center'});

      if (this.games) {
        this.gamesNative?.forEach((_, j) => {
          if (index != j && this.games) {
            this.games.toArray()[j].isSelected = false;
          }
        });

        this.games.toArray()[index].isSelected = true;
        if (this._games.games) {
          this._games.currentGame = this._games.games[this.index];
        }
      }
    }

    highlightNextGame(): void {
      if (!this.games) return;
      this.index++;

      if (this.index > this.games.length - 1) {
        this.index = 0;
      }

      this.highlightAtIndex(this.index);
    }

    highlightPreviousGame(): void {
      if (!this.games) return;

      if (this.index < 1) {
        this.index = this.games.length;
      }

      this.index--;
      this.highlightAtIndex(this.index);
    }
}
