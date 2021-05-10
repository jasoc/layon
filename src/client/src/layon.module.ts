import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';

import { FormsModule } from '@angular/forms';

import { GamesMainComponent } from './modules/games/pages/games-main/games-main.component';
import { SpotifyComponent } from './modules/spotify/spotify.component';

import {
    MainComponent,
    TopbarComponent,
    UserBoxComponent,
    FlatButtonComponent,
    TopbarButtonComponent,
    CircularButtonComponent
} from 'components';

import {
    GamesListComponent,
    GameBoxComponent,
    GameFooterComponent
} from 'modules/games';



@NgModule({
  declarations: [
    MainComponent,
    TopbarComponent,
    UserBoxComponent,
    GamesListComponent,
    GameBoxComponent,
    GameFooterComponent,
    TopbarButtonComponent,
    FlatButtonComponent,
    CircularButtonComponent,
    GamesMainComponent,
    SpotifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
