import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentsModule } from 'components/components.module';
import { GamesModule } from 'modules/games/games.module';

import { TopbarComponent } from './components/topbar/topbar.component';

import { MainViewComponent } from './pages/main-view/main-view.component';

import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    MainViewComponent,
    TopbarComponent
  ],
  exports: [
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    GamesModule,
    ComponentsModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [MainViewComponent]
})
export class MainModule { }
