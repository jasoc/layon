import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesMainComponent } from 'modules/games/pages/games-main/games-main.component';
import { SpotifyComponent } from 'modules/spotify/spotify.component';

const routes: Routes = [
  { path: 'games', component: GamesMainComponent },
  { path: 'spotify', component: SpotifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
