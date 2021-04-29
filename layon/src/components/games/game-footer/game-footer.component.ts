import { Component, Input } from '@angular/core';
import { LayonBackendService } from 'services';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'game-footer',
  templateUrl: './game-footer.component.html',
  styleUrls: ['./game-footer.component.scss']
})
export class GameFooterComponent {

    @Input() public title?: string;
    @Input() public genres?: string[];

    constructor(public _layonBackend: LayonBackendService, public http: HttpClient) { }

    openGame() {
      this._layonBackend.openGame("C:/Program Files/Process Lasso").subscribe();
    }

}
