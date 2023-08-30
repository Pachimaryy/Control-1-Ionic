import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lugar8Page } from './lugar8.page';

const routes: Routes = [
  {
    path: '',
    component: Lugar8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lugar8PageRoutingModule {}
