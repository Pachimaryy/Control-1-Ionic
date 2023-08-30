import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Usuario2PageRoutingModule } from './usuario2-routing.module';

import { Usuario2Page } from './usuario2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Usuario2PageRoutingModule
  ],
  declarations: [Usuario2Page]
})
export class Usuario2PageModule {}
