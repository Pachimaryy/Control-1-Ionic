import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lugar4PageRoutingModule } from './lugar4-routing.module';

import { Lugar4Page } from './lugar4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lugar4PageRoutingModule
  ],
  declarations: [Lugar4Page]
})
export class Lugar4PageModule {}
