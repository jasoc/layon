import {Component, ViewChildren, QueryList, ElementRef, Input} from '@angular/core';
import {GameBoxComponent} from 'modules/games/components/game-box/game-box.component';
import {GamesService} from 'core/services';
import {game} from 'core/models';
import {LayonBackendService} from 'core/services/layon-backend.service';

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
        public _layonBackend: LayonBackendService,
    ) {
      // window.addEventListener('gamepadconnected', function(e) {
      //   console.log('joypad connected');
      //   setInterval(function gameLoop() {
      //     const gamepad = navigator.getGamepads()[0]; // get the first controller.
      //     if (gamepad && gamepad.connected) {
      //       // check if direction buttons (UP, DOWN, LEFT, RIGHT) was pressed
      //       const axes = gamepad.axes;
      //       for (const i in axes) {
      //           if (axes[i] != 0) {
      //             console.log('axes[%s] value is: %s', i, axes[i]);
      //           };
      //       };
      //       // to check if other buttons(A,B,C,D,OK,Exit...) was pressed
      //       const buttons = gamepad.buttons;
      //       for (const i in buttons) {
      //           if (buttons[i].pressed == true) {
      //             console.log('buttons[%s] pressed', i);
      //           };
      //       };
      //     };
      //   }, 50);
      // });
      window.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.code == 'ArrowRight') {
          this.highlightNextGame();
        }

        if (event.code == 'ArrowLeft') {
          this.highlightPreviousGame();
        }

        if (event.code == 'Enter') {
          this._layonBackend.openGame(this._games.currentGame.path).subscribe();
        }
      });
    }

    public highlightAtIndex(index: number): void {
      if (this.games) {
        setTimeout(() => {
          /**
           * This is a work around for a very strange (and stupid) bug.
           * If the above function is executed outside of this setTimeout,
           * Angular, for misterious reasons, decide not to execute it.
           * Another strange behavior is that if you put a breakpoint in the
           * above line, it works.
           * So i found out that if I use a setTimeout with a timeout of 0 ms
           * averything start to work. You didn't see nothing.
           */
          this.gamesNative.toArray()[index]
            .nativeElement
            .scrollIntoView({behavior: 'smooth', inline: 'center', block: 'end'});
        }, 0);

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
