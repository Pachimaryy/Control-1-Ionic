import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Usuario3PageRoutingModule } from './usuario3-routing.module';

import { Usuario3Page } from './usuario3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Usuario3PageRoutingModule
  ],
  declarations: [Usuario3Page]
})
export class Usuario3PageModule {}
