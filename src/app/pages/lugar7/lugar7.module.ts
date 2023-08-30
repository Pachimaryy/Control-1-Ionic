import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lugar7PageRoutingModule } from './lugar7-routing.module';

import { Lugar7Page } from './lugar7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lugar7PageRoutingModule
  ],
  declarations: [Lugar7Page]
})
export class Lugar7PageModule {}
