import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lugar3PageRoutingModule } from './lugar3-routing.module';

import { Lugar3Page } from './lugar3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lugar3PageRoutingModule
  ],
  declarations: [Lugar3Page]
})
export class Lugar3PageModule {}
