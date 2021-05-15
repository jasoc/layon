import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from 'components/components.module';
import { SpotifyRoutingModule } from './spotify-routing.module';
import { SpotifyButtonComponent } from './components/spotify-button/spotify-button.component';
import { PlayerComponent } from './components/player/player.component';

import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { SpotifyMainComponent } from './pages/spotify-main/spotify-main.component';

@NgModule({
  declarations: [
    SpotifyButtonComponent,
    UnauthorizedComponent,
    SpotifyMainComponent,
    PlayerComponent
  ],
  imports: [ 
    ComponentsModule,
    CommonModule,
    FormsModule,
    SpotifyRoutingModule
  ],
  providers: [],
  bootstrap: [UnauthorizedComponent]
})
export class SpotifyModule { }
