import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from 'components/components.module';
import { SpotifyRoutingModule } from './spotify-routing.module';
import { SpotifyButtonComponent } from './components/spotify-button/spotify-button.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    SpotifyButtonComponent,
    UnauthorizedComponent
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
