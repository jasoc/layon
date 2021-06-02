import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ComponentsModule} from 'components/components.module';
import {MainRoutingModule} from './main-routing.module';

import {TopbarComponent} from './components/topbar/topbar.component';
import {OptionsMenuComponent} from './components/options-menu/options-menu.component';
import {AddGamePopupComponent} from './components/add-game-popup/add-game-popup.component';
import {MainViewComponent} from './pages/main-view/main-view.component';
import {GlobalPlayerComponent} from './components/global-player/global-player.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from 'environments/environment';

@NgModule({
  declarations: [
    MainViewComponent,
    TopbarComponent,
    OptionsMenuComponent,
    AddGamePopupComponent,
    GlobalPlayerComponent,
  ],
  exports: [
    MainViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ComponentsModule,
    MainRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [MainViewComponent],
})
export class MainModule { }
