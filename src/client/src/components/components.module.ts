import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {FlatButtonComponent} from 'components/flat-button/flat-button.component';
import {FlatInputComponent} from 'components/flat-input/flat-input.component';
import {CircularButtonComponent} from 'components/circular-button/circular-button.component';
import {TopbarButtonComponent} from 'components/topbar-button/topbar-button.component';
import {UserBoxComponent} from 'components/user-box/user-box.component';
import {SliderComponent} from 'components/slider/slider.component';

import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    FlatButtonComponent,
    FlatInputComponent,
    CircularButtonComponent,
    TopbarButtonComponent,
    UserBoxComponent,
    SliderComponent,
  ],
  exports: [
    FlatInputComponent,
    FlatButtonComponent,
    CircularButtonComponent,
    TopbarButtonComponent,
    UserBoxComponent,
    MatIconModule,
    MatFormFieldModule,
    SliderComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatIconModule,
    CommonModule,
    FormsModule,
  ],
})
export class ComponentsModule { }
