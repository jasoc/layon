import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GamesRoutingModule } from './games-routing.module';

import { GameBoxComponent } from './components/game-box/game-box.component';
import { GameFooterComponent } from './components/game-footer/game-footer.component';
import { GamesListComponent } from './components/games-list/games-list.component';

import { GamesMainComponent } from './pages/games-main/games-main.component';
import { GameViewComponent } from './pages/game-view/game-view.component';

import { ComponentsModule } from 'components/components.module';

@NgModule({
  declarations: [
    GamesMainComponent,
    GameViewComponent,
    GamesListComponent,
    GameBoxComponent,
    GameFooterComponent
  ],
  imports: [
    GamesRoutingModule,
    ComponentsModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [GamesMainComponent]
})
export class GamesModule { }
