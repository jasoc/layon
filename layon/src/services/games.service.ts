import { Injectable } from '@angular/core';
import { game } from 'models';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

    public games: game[] = [];

    constructor() {
     }
}
