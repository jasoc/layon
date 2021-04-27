import { Component, OnInit } from '@angular/core';

import { GamesService, LayonBackendService, LayonService } from 'services';
import { apiResult } from 'models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(
        public _games: GamesService,
        public _layonBackend: LayonBackendService,
        public _layon: LayonService
    ) { }

    ngOnInit(): void {
        this._layonBackend.getLocalUserName().subscribe(
            (response: apiResult) => {
                this._layon.userName = response.data;
            }
        );
    }
}
