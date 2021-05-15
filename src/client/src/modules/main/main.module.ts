import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ComponentsModule} from 'components/components.module';

import {TopbarComponent} from './components/topbar/topbar.component';
import {OptionsMenuComponent} from './components/options-menu/options-menu.component';

import {MainViewComponent} from './pages/main-view/main-view.component';

import {MainRoutingModule} from './main-routing.module';

@NgModule({
  declarations: [
    MainViewComponent,
    TopbarComponent,
    OptionsMenuComponent
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
  ],
  providers: [],
  bootstrap: [MainViewComponent],
})
export class MainModule { }
