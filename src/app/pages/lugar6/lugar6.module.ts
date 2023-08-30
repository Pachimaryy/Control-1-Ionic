import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lugar6PageRoutingModule } from './lugar6-routing.module';

import { Lugar6Page } from './lugar6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lugar6PageRoutingModule
  ],
  declarations: [Lugar6Page]
})
export class Lugar6PageModule {}
