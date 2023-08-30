import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lugar1Page } from './lugar1.page';

const routes: Routes = [
  {
    path: '',
    component: Lugar1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lugar1PageRoutingModule {}
