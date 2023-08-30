import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lugar1PageRoutingModule } from './lugar1-routing.module';

import { Lugar1Page } from './lugar1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lugar1PageRoutingModule
  ],
  declarations: [Lugar1Page]
})
export class Lugar1PageModule {}
