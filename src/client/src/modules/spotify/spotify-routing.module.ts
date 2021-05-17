import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpotifyMainComponent} from './pages/spotify-main/spotify-main.component';
import {UnauthorizedComponent} from './pages/unauthorized/unauthorized.component';

const routes: Routes = [
  {path: '', component: UnauthorizedComponent},
  {path: 'player', component: SpotifyMainComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpotifyRoutingModule { }
