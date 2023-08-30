import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lugar9PageRoutingModule } from './lugar9-routing.module';

import { Lugar9Page } from './lugar9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lugar9PageRoutingModule
  ],
  declarations: [Lugar9Page]
})
export class Lugar9PageModule {}
