import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GamesMainComponent} from './pages/games-main/games-main.component';
import {GameViewComponent} from './pages/game-view/game-view.component';

const routes: Routes = [
  {path: '', component: GamesMainComponent},
  {path: 'details/:game', component: GameViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule { }
