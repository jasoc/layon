import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesMainComponent } from 'modules/games/pages/games-main/games-main.component';

const routes: Routes = [
  { path: 'games', component: GamesMainComponent },
  { path: '', redirectTo: 'games', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
