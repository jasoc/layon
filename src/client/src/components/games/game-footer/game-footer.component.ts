import { Component, Input } from '@angular/core';
import { LayonBackendService } from 'services';
import { HttpClient } from '@angular/common/http';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'game-footer',
  templateUrl: './game-footer.component.html',
  styleUrls: ['./game-footer.component.scss'],
  animations: [
    trigger('open', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('0.1s', style({
          opacity: 1
        }))
      ]),
    ])
  ]
})
export class GameFooterComponent {

    @Input() public title?: string;
    @Input() public genres?: string[];

    constructor(public _layonBackend: LayonBackendService, public http: HttpClient) { }

    public add: boolean = false;

    openGame() {
      this._layonBackend.openGame("C:\\Program Files (x86)\\Minecraft Launcher\\MinecraftLauncher.exe").subscribe();
    }

    openFileExplorer(): void {
      document.getElementById('hidden')?.click();
    }

    onCazziClick() {
      this.add = !this.add;
      this._layonBackend.writeGamesIntoJson("cazzi", "maledetto gesu").subscribe((res) => { console.log(res); });
    }

}
