import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lugar4Page } from './lugar4.page';

const routes: Routes = [
  {
    path: '',
    component: Lugar4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lugar4PageRoutingModule {}
