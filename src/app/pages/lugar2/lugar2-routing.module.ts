import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lugar2Page } from './lugar2.page';

const routes: Routes = [
  {
    path: '',
    component: Lugar2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lugar2PageRoutingModule {}
