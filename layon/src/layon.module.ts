import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import {
    MainComponent,
    TopbarComponent,
    UserBoxComponent,
    FlatButtonComponent
} from 'components';

import {
    GamesListComponent,
    GameBoxComponent,
    GameFooterComponent
} from 'components/games';

@NgModule({
  declarations: [
    MainComponent,
    TopbarComponent,
    UserBoxComponent,
    GamesListComponent,
    GameBoxComponent,
    GameFooterComponent,
    FlatButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
