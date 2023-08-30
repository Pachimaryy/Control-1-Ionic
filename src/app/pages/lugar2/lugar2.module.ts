import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lugar2PageRoutingModule } from './lugar2-routing.module';

import { Lugar2Page } from './lugar2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lugar2PageRoutingModule
  ],
  declarations: [Lugar2Page]
})
export class Lugar2PageModule {}
