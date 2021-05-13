import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { SpotifyMainComponent } from 'modules/spotify/pages/spotify-main/spotify-main.component';


const routes: Routes = [
  { path: 'spotify', component: SpotifyMainComponent,
    children: [
      { path: 'unauthorized', component: UnauthorizedComponent, outlet: 'spotify'},
      { path: '', redirectTo: 'unauthorized', pathMatch:'full' }
    ] 
  },
];

// { path: 'product', component: ProductComponent,
//   children: [
//      { path: 'detail/:id', component: ProductDetailComponent }
//   ],

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SpotifyRoutingModule { }
