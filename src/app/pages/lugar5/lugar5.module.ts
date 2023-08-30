import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lugar5PageRoutingModule } from './lugar5-routing.module';

import { Lugar5Page } from './lugar5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lugar5PageRoutingModule
  ],
  declarations: [Lugar5Page]
})
export class Lugar5PageModule {}
