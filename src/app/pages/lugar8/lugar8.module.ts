import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lugar8PageRoutingModule } from './lugar8-routing.module';

import { Lugar8Page } from './lugar8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lugar8PageRoutingModule
  ],
  declarations: [Lugar8Page]
})
export class Lugar8PageModule {}
