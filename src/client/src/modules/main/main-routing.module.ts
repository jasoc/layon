import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainViewComponent} from './pages/main-view/main-view.component';

const routes: Routes = [
  {path: '', component: MainViewComponent },
  {path: 'games', loadChildren: () => import('modules/games/games.module').then((m) => m.GamesModule)},
  {path: 'spotify', loadChildren: () => import('modules/spotify/spotify.module').then((m) => m.SpotifyModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
