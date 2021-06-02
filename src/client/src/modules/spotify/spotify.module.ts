import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ComponentsModule} from 'components/components.module';
import {SpotifyRoutingModule} from './spotify-routing.module';
import {SpotifyButtonComponent} from './components/spotify-button/spotify-button.component';
import {PlayerComponent} from './components/player/player.component';
import {LeftSideBarComponent} from './components/left-side-bar/left-side-bar.component';
import {PlaylistsComponent} from './components/playlists/playlists.component';

import {UnauthorizedComponent} from './pages/unauthorized/unauthorized.component';
import {SpotifyMainComponent} from './pages/spotify-main/spotify-main.component';
import {TracksComponent} from './components/tracks/tracks.component';
// import {SliderComponent} from '../../components/slider/slider.component';

@NgModule({
  declarations: [
    SpotifyButtonComponent,
    UnauthorizedComponent,
    SpotifyMainComponent,
    PlayerComponent,
    LeftSideBarComponent,
    PlaylistsComponent,
    TracksComponent,
    // SliderComponent,
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    SpotifyRoutingModule,
  ],
  providers: [],
  bootstrap: [UnauthorizedComponent],
})
export class SpotifyModule { }
