import {Component} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition}
  from '@angular/animations';
import {GamesService, LayonBackendService} from 'core/services';
import {game} from 'core';

@Component({
  selector: 'add-game-popup',
  templateUrl: './add-game-popup.component.html',
  styleUrls: ['./add-game-popup.component.scss'],
  animations: [
    trigger('openClosePopup', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('130ms', style({
          opacity: 1,
        })),
      ]),
      transition(':leave', [
        animate('130ms', style({
          opacity: 0,
        })),
      ]),
    ]),
  ],
})
export class AddGamePopupComponent {
  public gameToAdd: game = {};
  public pathInserted: boolean = false;
  public name: string = '';

  constructor(
    public _games: GamesService,
    public _layonBackend: LayonBackendService
  ) {}

  onCloseClick() {
    this.pathInserted = false;
    this._games.onGameAddPopupOpen = false;
  }

  onAdd() {
    document.getElementById('file-upload').click();
  }

  onFileSelected(event) {
    this.gameToAdd.path = event.target.files[0].path;
    this.pathInserted = true;
  }

  onNameAdded() {
    this._layonBackend.writeGamesIntoJson(this.name, this.gameToAdd.path).subscribe();
    this._games.onGameAddPopupOpen = false;
  }
}
