import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Usuario4PageRoutingModule } from './usuario4-routing.module';

import { Usuario4Page } from './usuario4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Usuario4PageRoutingModule
  ],
  declarations: [Usuario4Page]
})
export class Usuario4PageModule {}
