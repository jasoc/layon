import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MainComponent,
  TopbarComponent,
  UserBoxComponent
} from 'components';

import {
  GamesListComponent,
  GameBoxComponent,
  GameFooterComponent
} from 'components/games';
import { TopbarButtonComponent } from './components/topbar-button/topbar-button.component';

@NgModule({
  declarations: [
    MainComponent,
    TopbarComponent,
    UserBoxComponent,
    GamesListComponent,
    GameBoxComponent,
    GameFooterComponent,
    TopbarButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
