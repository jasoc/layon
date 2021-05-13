import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlatButtonComponent } from 'components/flat-button/flat-button.component';
import { CircularButtonComponent } from 'components/circular-button/circular-button.component';
import { TopbarButtonComponent } from 'components/topbar-button/topbar-button.component';
import { UserBoxComponent } from 'components/user-box/user-box.component';

import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        FlatButtonComponent,
        CircularButtonComponent,
        TopbarButtonComponent,
        UserBoxComponent
    ],
    exports: [
        FlatButtonComponent,
        CircularButtonComponent,
        TopbarButtonComponent,
        UserBoxComponent,
        MatIconModule
    ],
    imports: [
        MatIconModule,
        CommonModule
    ],
})
export class ComponentsModule { }
